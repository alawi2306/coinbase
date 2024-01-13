// ./Redux/actions/apiActions.js

import { setData1, setData2, setData3 } from '../slices/apiSlice';


export const fetchData1 = (number) => async (dispatch) => {
    const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${number}&offset=0`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '88858a762emshd684ea4c27033d8p15caf5jsnceb873ebba8a',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Error fetching data1: ${response.statusText}`);
          }
        const data = await response.json(); // Assuming the response is in JSON format
        // Dispatch the setData1 action with the data, not the function
        dispatch(setData1(data));

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Propagate the error so that the component can handle it
    }
};

export const fetchData2 = (searchQuery) => async (dispatch) => {
  // Add the searchQuery parameter to the URL
  const encodedQuery = encodeURIComponent(searchQuery);
  const url = `https://coinranking1.p.rapidapi.com/search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=${encodedQuery}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '88858a762emshd684ea4c27033d8p15caf5jsnceb873ebba8a',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error fetching data2: ${response.statusText}`);
    }
    const data = await response.json();
    dispatch(setData2(data));
  } catch (error) {
    // Handle error
    console.error('Error fetching data2:', error);
  }
};

export const fetchData3 = () => async (dispatch) => {
  // Add the searchQuery parameter to the URL
  const url = 'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl';
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88858a762emshd684ea4c27033d8p15caf5jsnceb873ebba8a',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

  try {
	const response = await fetch(url, options);
	const result = await response.json();
  dispatch(setData3(result))
  
} catch (error) {
	console.error(error);
}

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error fetching data3: ${response.statusText}`);
    }
    const data = await response.json();
    dispatch(setData3(data));
  } catch (error) {
    // Handle error
    console.error('Error fetching data2:', error);
  }
};
