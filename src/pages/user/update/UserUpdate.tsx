import { useNavigate, useParams } from 'react-router-dom';
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

    return (
        <>
            {!!data && (<UserForm title='Edição de Usuário' initialValues={data as userData} submit={handleSubmit}/>)}        
        </>
    );
};

export default UserUpdate;