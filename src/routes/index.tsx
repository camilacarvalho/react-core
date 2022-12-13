import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSidebarContext } from '../contexts';
import { Home, UserCreate, UserList } from '../pages';
import { UserUpdate } from '../pages/user/update';
const AppRoutes = () => {
    const {setSidebarOptions} = useSidebarContext();
    useEffect(()=>{
        setSidebarOptions([
            {
                icon:'home',
                path:'/',
                label:'Página Inicial'
            },
            {
                icon:'peopleAlt',
                path:'/users',
                label:'Usuários'
            }
        ]);

    },[]);

    return(
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/users' element={<UserList/>}></Route>
            <Route path='/users/:id' element={<UserUpdate/>}></Route>
            <Route path='/users/create' element={<UserCreate/>}></Route>
            <Route path='*' element={<Navigate to="/home"/>}></Route>
        </Routes>
    );
};
export default AppRoutes;