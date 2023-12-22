import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const Box = ({ title, image, onClick, price, rank, coinID }) => {
  return (
    <div className='flex justify-center items-center p-4'>
      <Card
        onClick={onClick}
        className='max-w-sm shadow-md w-full'
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          style={{ objectFit: 'cover', width: '100%', height: '150px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" className='mb-2 text-center font-bold'>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div" className='mb-2 text-center'>
            Price: {price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div" className='mb-2 text-center'>
            Rank: {rank}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div" className='text-center'>
            See more details:
            <Link href={`../Coin/[coinID]`} as={`../Coin/${coinID}`}> Click </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

// Default props for Box component
Box.defaultProps = {
  price: "No price",
  rank: "No rank given"
};

export default Box;

