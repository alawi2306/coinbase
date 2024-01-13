"use client"

import React, { useEffect } from 'react';
import { fetchData3 } from '../Redux/actions/apiActions';
import { Typography, CircularProgress } from '@mui/material';
import { connect } from 'react-redux';
import Box from './Box';

const mapStateToProps = (state) => ({
  apiData3: state.api.apiData3.data,
  loading: state.api.loading,
});

const mapDispatchToProps = {
  fetchData3,
};

const StatsBox = ({ volume, totalmarkets, marketcap }) => {
  return (
    <div className='m-8 flex flex-col align-items items-center'>
      <Typography className='text-white' variant="h2">Current cryptocurrency stats </Typography>
      <Typography className='text-white' variant="h6">Current market volume being traded: {volume}</Typography>
      <Typography className='text-white' variant="h6">Total amount of markets available: {totalmarkets}</Typography>
      <Typography className='text-white' variant="h6">Current marketcap: ${marketcap}</Typography>
    </div>
  );
};

const Stats = ({ apiData3, fetchData3, loading }) => {
  useEffect(() => {
    fetchData3();
  }, []);

  return (
    <div className='h-[700px] flex align-center items-center w-full flex-col bg-slate-700'>
      {loading ? (
        <CircularProgress style={{ margin: '20px' }} />
      ) : apiData3 ? (
        <>
          <StatsBox
            volume={apiData3.total24hVolume}
            totalmarkets={apiData3.totalMarkets}
            marketcap={apiData3.totalMarketCap}
          />
          <Typography variant="h5">The newest, upcoming coins</Typography>
          <div className='flex flex-row flex-wrap align-center items-center'>
            {apiData3.newestCoins.map((e, i) => (
              <Box
                title={e.name}
                image={e.iconUrl}
                rank={e.symbol}
                key={i}
                coinID={e.uuid}
              />
            ))}
          </div>
        </>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
