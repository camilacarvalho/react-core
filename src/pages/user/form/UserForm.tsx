import { Box, Button, Card, CardActions, CardContent, Typography, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { FormField, SelectField } from '../../../components';
import * as Yup from 'yup';
import { userData} from '../../../models';
import React from 'react';

type UserFormProps = {
    initialValues: userData,
    submit: (value: userData) => void,
    title: string
}

const UserForm = ({initialValues, submit, title}: UserFormProps) => {

    const userSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        isActive: Yup.boolean().default(true).required(),
        roleId: Yup.number().default(2).required(),
        avatar: Yup.string()
    });

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

    return (
        <Box>
            <Box mt={10}>
                <Grid container>
                    <Grid item xs={0} md={1} lg={2}>
                    </Grid>
                    <Grid item xs={12} md={10} lg={8}>
                        {initialValues && (
                            <Formik validationSchema={userSchema} initialValues={initialValues} onSubmit={submit}>
                                {({isValid})=> (
                                    <Form>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Box display='flex' flexDirection='column' gap={2} padding={2}>
                                                    <Typography variant="h5">{title}</Typography> 
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
                        )}
                    </Grid>
                    <Grid item xs={0} md={1} lg={2}>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default UserForm;