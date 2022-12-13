import { useNavigate, useParams } from 'react-router-dom';
import { Breadcrumb } from '../../../components';
import BasePageLayout from '../../../layouts/BasePageLayout';
import { userData } from '../../../models';
import UserForm from '../form/UserForm';
import userApi from '../hooks/useUserApi';

const UserUpdate = () => {
    const { user: userAPI } = userApi();
    const { id } = useParams();
    const { mutate: updateUser } = userAPI.update(parseInt(id?id:'0'));
    const { data } = userAPI.getById(parseInt(id?id:'0'));
    const navigate = useNavigate();

    const handleSubmit = (user: userData)=> {
        updateUser(user, {
            onSuccess: () => {
                navigate('/users');
            }
        });    
    };
    const breadcrumbList = [{title: 'Usuários', link:'/users'}, {title: 'Edição de Usuário'}];
    return (
        <BasePageLayout barraDeFerramentas={<Breadcrumb  items={breadcrumbList}/>}>
            {!!data && (<UserForm title='Edição de Usuário' initialValues={data as userData} submit={handleSubmit}/>)}        
        </BasePageLayout>
    );
};

export default UserUpdate;