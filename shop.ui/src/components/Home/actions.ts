import axios from 'axios';
import { FETCH_PRODUCTS } from './types';

// const PROXY = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL = `http://localhost:65333/api`

export function fetchProducts(){
    const request = axios.get(`${ROOT_URL}/Products`);

    return {
        type: FETCH_PRODUCTS,
        payload: request
    }
}