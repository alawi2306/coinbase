"use client"

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData1 } from '@/app/Redux/actions/apiActions';
import { Line } from 'react-chartjs-2';
import { LinearScale, CategoryScale, PointElement, LineElement, Chart } from 'chart.js';

Chart.register(LinearScale, CategoryScale, PointElement, LineElement);

const currentTimestamp = new Date().getTime();
const hoursArray = [];

for (let i = 0; i < 24; i++) {
  const hourTimestamp = currentTimestamp - i * 60 * 60 * 1000;
  const hourDate = new Date(hourTimestamp);
  const formattedHour = hourDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  hoursArray.push(formattedHour);
}

const newArray = hoursArray.reverse()

const CoinCard = ({ data, params }) => {
  const specificCoin = data?.filter((e) => e.uuid === params.coinID) || [];
  console.log(specificCoin);

  if (!specificCoin || specificCoin.length === 0) {
    // Data not available yet, handle loading state
    return <p>Loading...</p>;
  }

  return (
    <div className='w-[700px] h-[700px]'>
      <Line 
      data={{
        labels: newArray,
        datasets: [
          {
            label: "Price",
            data: specificCoin[0].sparkline, // Assuming specificCoin is an array
            backgroundColor: 'red',
            borderColor: 'blue'
          }
        
        ]
        
      }}
      
    />
    </div>
    
  );
};

const CoinID = ({ params, fetchData1, data }) => {
  useEffect(() => {
    fetchData1();
  }, []); // Remove fetchData1 from the dependency array if it doesn't change

  // Function to render specific coin details
  const renderSpecificCoin = () => {
    const [specificCoin] = data?.filter((e) => e.uuid === params.coinID) || [];

    if (specificCoin) {
      return (
        <div>
          <p>Name: {specificCoin.name}</p>
          <p>Rank: {specificCoin.rank}</p>
        </div>
      );
    }

    return <p>No data for this coin ID</p>;
  };

  return (
    <div>
      <h1>{renderSpecificCoin()}</h1>
      <CoinCard data={data} params={params} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.api.apiData1?.data?.coins);
  return {
    data: state.api.apiData1?.data?.coins,
  };
};

const mapDispatchToProps = {
  fetchData1,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinID);
