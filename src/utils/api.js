import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjQ0NzY2OTIxNzAzNjgyMmIyYzc4OWZmYTg1OTA5NCIsInN1YiI6IjY0ZDIxYzg2ODUwOTBmMDE0NDVjZTBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4DxAAYR3jdQKXw-bGkNDqzN9NEZEp6ve-IHJReaUYRc";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,

};

export const fetchDataFromApi = async (url, params) => {
  try{
    const  {data} = await axios.get(BASE_URL + url, {
      headers,
      params
    })
    return data;
  }
  catch(err){
    console.log(err);
    return err;
  }
}