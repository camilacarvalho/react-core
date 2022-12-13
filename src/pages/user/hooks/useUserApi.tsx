import { useQuery, useMutation, useQueryClient } from 'react-query';
import { UserService } from '../../../api/user/UserService';
import notification from '../../../utils/notification';

const userApi = () => {

    const queryClient = useQueryClient();

    const getAll = () => {
        return useQuery('users', () => { return UserService.getAll(); }, {
            onError: (error: any) => {
                notification('error', error.message ?? 'Não foi possível carregar lista de usuários', 'toast-user-list-error');
            }
        });
    };

    const getById = (id: number | string) => {
        return useQuery(['userComponent', id], () => { return UserService.getById(id); }, {
            onError: (error: any) => {
                notification('error', error.message ?? 'Não foi possível carregar o usuário', 'toast-user-error');
            },
        });
    };

    const create = () => {
        return useMutation(UserService.create, {
            onSuccess: () => {
                queryClient.invalidateQueries('users');
                notification('success','Usuário inserido com sucesso', 'toast-user-create-success');
            },
            onError: (error: any) => {
                notification('error', error?.message??'Erro ao inserir usuário', 'toast-user-create-error');
            }
        });
    };

    const update = (id: number | string) => {
        return useMutation(UserService.updateById, {
            onSuccess: () => {
                queryClient.invalidateQueries(['userComponent', id]);
                queryClient.invalidateQueries('users');
                notification('success','Usuário atualizado com sucesso', 'toast-user-update-success');
            }, onError: (error: any) => {
                notification('error', error?.message??'Erro ao atualizar usuário', 'toast-user-update-error');
            }
        });
    };

    const deleteById = () => {
        return useMutation(UserService.deleteById, {
            onSuccess: () => {
                queryClient.invalidateQueries('users');
                notification('success','Usuário removido com sucesso', 'toast-user-remove-success');
            },
            onError: (error: any) => {
                notification('error', error?.message??'Erro ao remover usuário', 'toast-user-remove-error');
            }
        });
    };

    return {
        user: {
            create,
            getAll,
            update,
            getById,
            deleteById,
        }
    };
};

export default userApi;