"use client";

import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchData1, fetchData2 } from '../Redux/actions/apiActions';
import { setSearchQuery } from '../Redux/slices/searchSlice';
import Box from './Box';
import { TextField, Typography, Button } from '@mui/material';
import Stats from './Stats';
import { setNumber } from '../Redux/slices/numberSlice';
import '@mui/material/styles';



const Hero = ({ apiData1, searchQuery, apiData2, number, fetchData1, fetchData2, loggedIn }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    number && fetchData1(number);
  }, [searchQuery, number, fetchData1]);

  const onChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
    e.target.value !== null && fetchData2(e.target.value);
  };

  const incrementNumber = () => {
    if (number !== null && number !== undefined) {
      dispatch(setNumber(number + 10));
    }
  };

  return (
    <div>
      {loggedIn ? (
      <div className="flex justify-center items-center flex-col hero-pattern">
        <Stats />
        <div className="m-10 flex justify-center items-center w-full">
          <div>
            <Typography variant="h6">
              We list the top cryptocurrencies currently available on the market
            </Typography>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Typography style={{ margin: '0 20px' }}>
              Search here for your specific coin:
            </Typography>
            <TextField
                type="text"
                onChange={onChange}
                variant="outlined"
                className="z-10"

              />
          </div>
        </div>
        <Typography variant="h4" gutterBottom style={{ fontWeight: '600' }}>
          The current top 50:
        </Typography>
        <div className="flex flex-row flex-wrap w-full h-full align-center items-center">
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
    
        <Button onClick={incrementNumber}>Render more cards</Button>
      </div>
    ) : null}
    
    </div>
    
  );
};

const mapStateToProps = (state) => ({
  apiData1: state.api.apiData1,
  searchQuery: state.searchQuery,
  apiData2: state.api.apiData2,
  number: state.number.number,
  loggedIn: state.loggedIn.loggedIn
});

const mapDispatchToProps = {
  fetchData1,
  fetchData2,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
