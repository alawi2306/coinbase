"use client"

import "./globals.css"
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

require('dotenv').config();

// Assuming you have a Redux store configured
import store from './Redux/store';

const metadata = {
  title: 'Recipes',
  description: 'Recipes for anyone'
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Include your metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        {/* Provide the Redux store to the entire application */}
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}