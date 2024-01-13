const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// Now you can use process.env to access the variables defined in .env

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

UserSchema.pre('save', async function (next) {
  // Hash the password before saving to the database
  const user = this;
  if (user.isModified('password') || user.isNew) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
});

const UserModel = mongoose.model('User', UserSchema);

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await UserModel.findOne({ email });

      if (!user) {
        return done(null, false, { message: 'Incorrect email' });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new UserModel({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/login', passport.authenticate('local'), (req, res) => {
  console.log('Login successful');
  res.json({ message: 'Login successful', user: req.user });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
