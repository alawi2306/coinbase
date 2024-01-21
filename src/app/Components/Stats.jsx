"use client"

import React, { useEffect } from 'react';
import { fetchData3 } from '../Redux/actions/apiActions';
import { Typography, CircularProgress } from '@mui/material';
import { connect } from 'react-redux';
import Box from './Box';
import { styles } from '../styles';

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
      <Typography className={`${styles.sectionHeadText}`}>Current cryptocurrency stats </Typography>
      <div className="flex flex-row flex-wrap justify-evenly my-10">
      <Typography className={`${styles.sectionSubText} ${styles.paddingX}`}  variant="h6">Amount of coins currently being traded: {volume}</Typography>
      <Typography className={`${styles.sectionSubText} ${styles.paddingX}` } >Total amount of markets available: {totalmarkets}</Typography>
      <Typography className={`${styles.sectionSubText} ${styles.paddingX}`} >Current marketcap: ${marketcap}</Typography>
      </div>
    
    </div>
  );
};

const Stats = ({ apiData3, fetchData3, loading }) => {
  useEffect(() => {
    fetchData3();
  }, [fetchData3]);

  return (
    <div className='h-screen flex justify-center items-center w-full flex-col bg-black'>
      {loading ? (
        <CircularProgress style={{ margin: '20px' }} />
      ) : apiData3 ? (
        <>
         <div className='gradient-03 z-10 rounded-md left-15 bottom-0'>
            s
          </div>
          <div className='gradient-02 z-10 rounded-md top-0 left-0'>
            s
          </div>
          <div className='gradient-04 z-10 rounded-md top-0 right-20'>
            s
          </div>
          <StatsBox
            volume={apiData3.total24hVolume}
            totalmarkets={apiData3.totalMarkets}
            marketcap={apiData3.totalMarketCap}
          />
          <Typography className={`${styles.sectionSubText}`}>The newest, upcoming coins</Typography>
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
