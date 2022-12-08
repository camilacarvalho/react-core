import { QueryClient, useQuery, useMutation } from 'react-query';
import { UserService } from '../../../api/user/UserService';
import notification from '../../../utils/notification';



const userApi = () => {
    const queryClient = new QueryClient();

    const getAll = () => {
        return useQuery('users', () => { return UserService.getAll(); }, {
            onError: (error: any) => {
                notification('error', error.message ?? 'Não foi possível carregar lista de usuários', 'toast-user-list-error');
            }
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

    return {
        user: {
            create,
            getAll
        }
    };
};

export default userApi;