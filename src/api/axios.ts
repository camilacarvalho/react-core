import axios from 'axios';
import { resolve } from 'path';
import { Environment } from '../environment';

const Api = axios.create({
    baseURL:'http://localhost:3333',
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem(Environment.LOCAL_STORAGE_KEY_ACCESS_TOKEN) || '')}`
    }
});

/**Api.interceptors.request.use((resolve)=>{
    return resolve;
}, (error)=> {
    return error;
});
 */
export default Api;