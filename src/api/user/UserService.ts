import { userData } from '../../models';
import Api from '../axios';

const getAll = async (): Promise<userData[]> => {
    const { data } = await Api.get<userData[]>('/users');
    return data;
};

const getById = async (id: number | string): Promise<userData> => {
    const{ data } = await Api.get(`/users/${id}`);
    return data;
};
const create = async (user: userData): Promise<userData> => {
    const { data } = await Api.post('/users', user);
    return data;
};
const updateById = async (user: userData): Promise<userData> => {
    const{ data } = await Api.put(`/users/${user.id}`, user);
    return data;
};
const deleteById = async (id: number): Promise<void> => {
    return await Api.delete(`/users/${id}`);
};
export const UserService = {
    getAll, getById, create, updateById, deleteById
};