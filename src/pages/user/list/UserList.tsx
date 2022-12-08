import BasePageLayout from '../../../layouts/BasePageLayout';
import userApi from '../hooks/useUserApi';
import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Icon from '@mui/material/Icon';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

const UserList = () => {
    const { user: userAPI } = userApi();
    const { data } = userAPI.getAll();
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const handleEditUser=(id:number)=> {
        console.log(id);
    };

    const handleDeleteUser=(id:number)=> {
        console.log(id);
    };

    const columns: GridColDef[] = [
        { field: 'name',  flex: 0.9, minWidth: 40, headerName: 'Name', align: 'center', headerAlign: 'center'},
        { field: 'email',  flex: 0.7, minWidth: 30, headerName: 'Email', align: 'center', headerAlign: 'center' },
        {
            field: 'isActive',  flex: 0.2 , minWidth: 10, headerName: 'Active', align: 'center', headerAlign: 'center', disableColumnMenu: true, sortable: false, renderCell: (params) => {
                const { isActive } = params.row;
                return isActive ? (<Icon color='success'>check</Icon>) : (<Icon color='error'>close</Icon>);
            }
        },
        { field: 'roleId', minWidth: 10, flex: 0.5 , headerName: 'Role', headerAlign: 'center', align: 'center'},
        {
            field: 'actions', flex: 0.5, minWidth: 10, headerName: 'Ações', headerAlign: 'center', align: 'center', sortable: false, disableColumnMenu: true, renderCell: (params) => {
                const { id } = params.row;
                return (<Box>
                    <IconButton color='info'
                        aria-label='edit'
                        onClick={()=>handleEditUser(id)}
                    >
                        <Icon>edit</Icon>
                    </IconButton>
                    <IconButton color='error'
                        aria-label='delete'
                        onClick={()=>handleDeleteUser(id)}
                    >
                        <Icon>delete</Icon>
                    </IconButton>
                </Box>);
            }
        }
    ];

    return (
        <BasePageLayout title='Usuários' barraDeFerramentas={<>Barra de Ferramentas</>}>
            <Box paddingX={smDown?theme.spacing(3):mdDown?theme.spacing(1):theme.spacing(10)}>
                <Box display='flex' justifyContent='end' marginY={theme.spacing(3)}>
                    <Button variant="contained" startIcon={<Icon>add</Icon>} onClick={() => navigate(`${location.pathname}/create`)}>Adicionar Usuário</Button>
                </Box>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data ?? []}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Box>
            </Box>
        </BasePageLayout>
    );
};

export default UserList;