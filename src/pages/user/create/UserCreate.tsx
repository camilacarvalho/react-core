import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FormField, SelectField } from '../../../components';
import { newUser } from '../../../models';
const UserCreate = () => {

    const roles = [
        {
            'value': 1,
            'label':'Administrador'
        },
        {
            'value': 2,
            'label':'Comum'
        }
    ];

    const userSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        isActive: Yup.boolean().default(true).required(),
        roleId: Yup.number().default(2).required(),
        avatar: Yup.string()
    });

    const initialValues = { name:'', email:'', isActive: true, roleId: 2, avatar: '' };

    const handleSubmit = (user: newUser)=> {
        console.log(user);
    };

    return (
        <Box>
            <Box>
                voltar
            </Box>
            <Box mt={10}>
                <Grid container>
                    <Grid item xs={0} md={1} lg={2}>
                    </Grid>
                    <Grid item xs={12} md={10} lg={8}>
                        <Formik validationSchema={userSchema} initialValues={initialValues}  onSubmit={(values)=> {handleSubmit(values);}}>
                            {({isValid})=> (
                                <Form>
                                    <Card variant="outlined">
                                        <CardHeader>
                                            <Typography>Cadastro de Usuário</Typography> 
                                        </CardHeader>
                                        <CardContent>
                                            <Box display='flex' flexDirection='column' gap={2} padding={2}>
                                                <FormField id="name-field" name="name" label="Nome" fullWidth required />
                                                <FormField id="email-field" name="email" label="Email" type='email' fullWidth required />
                                                <SelectField name='roleId' id='role-select' label='Função' options={roles} fullWidth required />
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            <Box display='flex' flex={1} justifyContent='flex-end' padding={2}>
                                                <Button disabled={!isValid} type='submit' variant="outlined">Salvar</Button>
                                            </Box>
                                        </CardActions>
                                    </Card>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                    <Grid item xs={0} md={1} lg={2}>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default UserCreate;
