
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_YOUTUBE_KEY; // Use environment variable
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com',
  },
};

export const FetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error; 
  }
};
