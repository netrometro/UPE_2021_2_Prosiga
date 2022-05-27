import axios from 'axios';
import CONSTANTS from '../../src/constants'

const client = axios.create({
    baseURL: CONSTANTS.API.BASE,
});

export default client;