import { QueryClient, useQuery, useMutation } from 'react-query';
import { UserService } from '../../../api/user/UserService';



const userApi = () => {
    const queryClient = new QueryClient();

    const getAll = () => {
        return useQuery('users', () => { return UserService.getAll();});
    };
    const create = () => {
        return useMutation(UserService.create), {
            onSuccess: () => {
                queryClient.invalidateQueries('users');
            }
        };
    };

    return {
        user: {
            create,
            getAll
        }
    };
};

export default userApi;