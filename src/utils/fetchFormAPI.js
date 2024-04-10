import axios from 'axios';
const BASE_URL =  'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '402e42ab25msh4031cf2ac9b13dcp1b0769jsn86d0c1af7651',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data
}