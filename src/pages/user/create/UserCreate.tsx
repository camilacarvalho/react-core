import { useNavigate } from 'react-router-dom';
import { userData } from '../../../models';
import UserForm from '../form/UserForm';
import userApi from '../hooks/useUserApi';

const UserCreate = () => {
    const { user: userAPI } = userApi();
    const { mutate: createUser } = userAPI.create();

    const navigate = useNavigate();

    const handleSubmit = (user: userData)=> {
        createUser(user, {
            onSuccess: () => {
                navigate('/users');
            }
        });    
    };

    const initialValues = { name:'', email:'', isActive: true, roleId: 2, avatar: '' };

    //adicionar breadcrumb
    return (
        <UserForm title='Cadastro de Usuário' initialValues={initialValues} submit={handleSubmit}/>
    );
};

export default UserCreate;
