import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useLoginContext } from '../../contexts/LoginContext';
import * as Yup from 'yup';
import { LoginRequest } from '../../models';
import {Formik, Form} from 'formik';
import { FormField } from '../../components';

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
            <Formik validationSchema={loginSchema} initialValues={{email:'', password:''}} onSubmit={(values)=> {handleSubmit(values);}}>
                {({isValid})=> (
                    <Form>
                        <Card>
                            <CardContent>
                                <Box display='flex' flexDirection='column' gap={2} width={250}>
                                    <Typography variant='h6' align='center'>Entrar</Typography>
                                    <FormField required fullWidth id="email-field" name="email" label="Email" type='email'/>
                                    <FormField  required fullWidth id="password-field" name="password" label="Senha" type='password'/>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Box width='100%' display='flex' justifyContent='center'>
                                    <Button fullWidth variant='contained' disabled={!isValid} type='submit'>Entrar</Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default Login;