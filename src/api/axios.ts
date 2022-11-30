import axios from 'axios';
import { resolve } from 'path';
import { Environment } from '../environment';

const accessToken = localStorage.getItem(Environment.LOCAL_STORAGE_KEY_ACCESS_TOKEN);

const Api = axios.create({
    baseURL:'http://localhost:3333',
    headers: {
        Authorization: `Bearer ${accessToken?JSON.parse(accessToken):''}`
    }
});

/**Api.interceptors.request.use((resolve)=>{
    return resolve;
}, (error)=> {
    return error;
});
 */
export default Api;