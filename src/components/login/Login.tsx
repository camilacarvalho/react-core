import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useLoginContext } from '../../contexts/LoginContext';
import * as Yup from 'yup';
import { LoginRequest } from '../../models/login';

const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(5),
});
const Login = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, login } = useLoginContext();

    const handleSubmit = (auth: LoginRequest) => {
        login(auth);
    };

    if (isAuthenticated) {
        return <>{children}</>;
    }
    return (
        <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center'>
            <Card>
                <CardContent>
                    <Box display='flex' flexDirection='column' gap={2} width={250}>
                        <Typography variant='h6' align='center'>Identifique-se</Typography>
                        <TextField  fullWidth label="Email" type='email'/>
                        <TextField  fullWidth label="Senha" type='password' />
                    </Box>
                </CardContent>
                <CardActions>
                    <Box width='100%' display='flex' justifyContent='center'>
                        <Button variant='contained' onClick={()=> login({email:'', password:''})}>Entrar</Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Login;