import axios from 'axios';

const API_URL = "https://exam.api.fotex.net/api/artists";

export const getArtists = async (params: Record<string, any>) => {
  const { data } = await axios.get(API_URL, { params });
  return data;
};

