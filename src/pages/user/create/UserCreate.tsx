import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from '../../../components';
import BasePageLayout from '../../../layouts/BasePageLayout';
import { userData } from '../../../models';
import UserForm from '../form/UserForm';
import userApi from '../hooks/useUserApi';

const UserCreate = () => {
    const { user: userAPI } = userApi();
    const { mutate: createUser } = userAPI.create();

    const navigate = useNavigate();

    const breadcrumbList = [{title: 'Usuários', link:'/users'}, {title: 'Cadastro de Usuário'}];

    const handleSubmit = (user: userData)=> {
        createUser(user, {
            onSuccess: () => {
                navigate('/users');
            }
        });    
    };

    const initialValues = { name:'', email:'', isActive: true, roleId: 2, avatar: '' };

    return (
        <BasePageLayout barraDeFerramentas={<Breadcrumb  items={breadcrumbList}/>}>
            <UserForm title='Cadastro de Usuário' initialValues={initialValues} submit={handleSubmit}/>
        </BasePageLayout>
    );
};

export default UserCreate;
