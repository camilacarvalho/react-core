import { BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import { AppSidebarProvider } from './contexts';
import { LoginProvider } from './contexts/LoginContext';
import AppRoutes from './routes';
const App = () => {
    return (
        <LoginProvider>
            <Login>
                <BrowserRouter>
                    <AppSidebarProvider>
                        <Sidebar>
                            <AppRoutes />
                        </Sidebar>
                    </AppSidebarProvider>
                </BrowserRouter>
            </Login>
        </LoginProvider>
    );
};

export default App;
