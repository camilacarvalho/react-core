import { userData } from '../../models';
import Api from '../axios';

const getAll = async(): Promise<userData[]> => {
    const { data } = await Api.get<userData[]>('/users');
    return data;
};

const getById = async(id:number): Promise<userData> => {
    return await Api.get(`/users${id}`);
};
const create = async(user: userData): Promise<userData> => {
    const { data } = await Api.post('/users', user);   
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