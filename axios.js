import axios from "axios";

const instance = axios.create({
    baseURL: process.env.URL_SERVER,
    // headers: {'X-Custom-Header': 'foobar'}
});


export default instance