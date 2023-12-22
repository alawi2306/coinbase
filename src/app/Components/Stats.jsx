import React, { useEffect } from 'react';
import { fetchData3 } from '../Redux/actions/apiActions';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import Box from "./Box"

const mapStateToProps = (state) => {
    return {
        apiData3: state.api.apiData3.data,
    };
};

const mapDispatchToProps = {
    fetchData3,
};

const StatsBox = ({ volume, newestcoins, totalmarkets, marketcap }) => {
    return (
        <div className='m-8 flex flex-col align-items items-center'>
            <Typography style= {{margin: '5px'}} variant= "h2">Current cryptocurrency stats</Typography>
            <Typography style= {{margin: '5px'}} variant = "h6">Current market volume: {volume}</Typography>
            <Typography style= {{margin: '5px'}} variant = "h6">Total amount of markets: {totalmarkets}</Typography>
            <Typography style= {{margin: '5px'}} variant = "h6">Current marketcap: {marketcap}</Typography>
        </div>
    );
};

const Stats = ({ apiData3, fetchData3 }) => {
    useEffect(() => {
        fetchData3();
    }, []);    

    return (
        <div className='flex align-center items-center w-full flex-col'>
          {apiData3 && <StatsBox
               volume={apiData3.total24hVolume}
               totalmarkets={apiData3.totalMarkets}
               marketcap={apiData3.totalMarketCap}
           /> }
          
          <Typography variant = "h5">The newest, upcoming coins</Typography>

          <div className='flex flex-row flex-wrap align-center items-center '>
           {apiData3 && apiData3.newestCoins.map((e, i) => (
            <Box 
            title = {e.name}
            image = {e.iconUrl}
            rank = {e.symbol}
            key = {i}
            coinID={e.uuid}
            />
           ))}
          </div>
          


        </div>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Stats);
