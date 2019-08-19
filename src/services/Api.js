import axios from 'axios';

// const api = axios.create({
//     baseURL: 'https://anomnistackbackend.herokuapp.com/',
// })

const api = axios.create({
    baseURL: 'http://localhost:7100/',
})

export default api;