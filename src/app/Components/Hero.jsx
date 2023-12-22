
"use client"

import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchData1, fetchData2 } from '../Redux/actions/apiActions';
import { setSearchQuery } from '../Redux/slices/searchSlice';
import Box from './Box';
import { TextField, Typography, Button } from '@mui/material';
import Stats from './Stats';
import { setNumber } from '../Redux/slices/numberSlice';

const Hero = ({ fetchData1, apiData1, searchQuery, fetchData2, apiData2, number }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData1(number);

  }, [searchQuery, dispatch]);

  const onChange = (e) => {
    // Dispatch setSearchQuery directly in the component
    dispatch(setSearchQuery(e.target.value));
    // Use fetchData2 directly in the component
    e.target.value !== null && fetchData2(e.target.value);
  };

  const incrementNumber = (e) => {
     dispatch(setNumber(...number + 50))
  }


  return (
    <div className='flex align-center items-center flex-col'>
      <Stats></Stats>
      <div className='m-10 flex justify-evenly items-center w-full'>
        <div>
          <Typography variant="h6">We list the top cryptocurrencies currently available on the market</Typography>
        </div>
        <div className='flex flex-row items-center align-center'>
          <Typography style={{ margin: '0 20px' }}>Search here for your specific coin: </Typography>
          <TextField onChange={onChange}></TextField>
        </div>
      </div>
      <Typography variant="h4" gutterBottom style={{ fontWeight: '600' }}>The current top 50:</Typography>
      <div className='flex flex-row flex-wrap w-full h-full align-center items-center'>
  {apiData2.length === 0
    ? apiData1?.data.coins?.map((e, i) => (
        <Box
          title={e.name}
          image={e.iconUrl}
          key={i}
          rank={e.rank}
          price={e.price}
          coinID={e.uuid}
        />
      ))
    : apiData2.data.coins.map((e, i) => (
        <Box
          title={e.name}
          image={e.iconUrl}
          key={i}
          rank={e.rank}
          price={e.price}
          coinID={e.uuid}
        />
      ))}
</div>


    <Button>Render more cards</Button>


    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    apiData1: state.api.apiData1,
    searchQuery: state.searchQuery,  // Make sure to access the correct property
    apiData2: state.api.apiData2,
    number: state.number
  };
};

const mapDispatchToProps = {
  fetchData1,
  fetchData2,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
