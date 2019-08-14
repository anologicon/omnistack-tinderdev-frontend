import axios from 'axios';

const api = axios.create({
    baseURL: 'https://anomnistackbackend.herokuapp.com/',
})

export default api;