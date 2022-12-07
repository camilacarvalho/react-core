import BasePageLayout from '../../../layouts/BasePageLayout';
import userApi from '../hooks/useUserApi';
import { Button } from '@mui/material';
import Icon from '@mui/material/Icon';
import { useLocation, useNavigate } from 'react-router-dom';
import { userData } from '../../../models';

const UserList = () => {
    const { user: userAPI } = userApi();
    const { data } = userAPI.getAll();
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <BasePageLayout title='Usuários' barraDeFerramentas={<>Barra de Ferramentas</>}>
            <Button variant="contained" startIcon={ <Icon>add</Icon>} onClick={()=>navigate(`${location.pathname}/create`)}>Adicionar Usuário</Button>
            {data?.map((user: userData) => (
                <li key={user.id}> {user.name} </li>
            ))}
        </BasePageLayout>
    );
};

export default UserList;