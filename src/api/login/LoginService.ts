import { LoginData, LoginRequest } from '../../models/login';
import Api from '../axios';

const login = async(login: LoginRequest): Promise<LoginData> => {
    /** Em uma aplicação real seria um post com os dados no corpo da requisição */
    const { data } = await Api.get('/login', {data: login});
    return data;

};

export const LoginService = {
    login
};