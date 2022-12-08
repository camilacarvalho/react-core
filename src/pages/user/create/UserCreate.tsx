import { Box,  Grid } from '@mui/material';
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
        <Box>
            <Box mt={10}>
                <Grid container>
                    <Grid item xs={0} md={1} lg={2}>
                    </Grid>
                    <Grid item xs={12} md={10} lg={8}>
                        <UserForm initialValues={initialValues} submit={handleSubmit}/>
                    </Grid>
                    <Grid item xs={0} md={1} lg={2}>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default UserCreate;
