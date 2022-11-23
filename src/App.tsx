import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { AppSidebarProvider } from './contexts';
import AppRoutes from './routes';
const App = () => {
    return (
        <BrowserRouter>
            <AppSidebarProvider>
                <Sidebar>
                    <AppRoutes />
                </Sidebar>
            </AppSidebarProvider>
        </BrowserRouter>
    );
};

export default App;
