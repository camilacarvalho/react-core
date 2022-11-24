import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSidebarContext } from '../contexts';
import { Home, User } from '../pages';
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
            <Route path='/users' element={<User/>}></Route>
            <Route path='*' element={<Navigate to="/home"/>}></Route>
        </Routes>
    );
};
export default AppRoutes;