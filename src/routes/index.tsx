import { Navigate, Route, Routes } from 'react-router-dom';
const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/home' element={<p>Página Inicial</p>}></Route>
            <Route path='*' element={<Navigate to="/home"/>}></Route>
        </Routes>
    );
};
export default AppRoutes;