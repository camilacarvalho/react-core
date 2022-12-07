import { usersResponse , userData, newUser} from '../../models';
import Api from '../axios';

const getAll = async(page=1, limit=10, filter=''): Promise<userData[]> => {
    const { data } = await Api.get<userData[]>(`/users?_page=${page}&_limit=${limit}&email_like=${filter}`);
    return data;
};

const getById = async(id:number): Promise<userData> => {
    const {data} = await Api.get(`/users${id}`);
    return data;
};
const create = async(user: newUser): Promise<userData> => {
    const {data} = await Api.post('/users', user);
    return data;
};
const updateById = async(id:number, user: userData): Promise<void> => {
    await Api.put(`/users${id}`, user);
};
const deleteById = async(id:number): Promise<void> => {
    await Api.delete(`/users${id}`);
};
export const UserService = {
    getAll, getById, create, updateById, deleteById
};