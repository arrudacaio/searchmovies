import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=172d2bcd975eca6acc08c0a239f0dc85&language=en-UShttps://api.themoviedb.org/3/search/movie?api_key=172d2bcd975eca6acc08c0a239f0dc85&language=en-US'
});

export default api;