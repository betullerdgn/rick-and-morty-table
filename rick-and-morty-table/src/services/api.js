import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (page, pageSize, filters) => {
  try {
    const params = {
      page, 
      ...filters,
    };

    const response = await axios.get(`${BASE_URL}`, { params });
    const totalResults = response.data.results;
    
    const slicedResults = totalResults.slice(0, pageSize);

    return {
      results: slicedResults,
      total: response.data.info.count,
    };
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
