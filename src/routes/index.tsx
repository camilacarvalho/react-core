import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSidebarContext } from '../contexts';
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
            <Route path='/home' element={<p>Página Inicial</p>}></Route>
            <Route path='/users' element={<p>Users</p>}></Route>
            <Route path='*' element={<Navigate to="/home"/>}></Route>
        </Routes>
    );
};
export default AppRoutes;