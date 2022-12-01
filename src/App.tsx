import { BrowserRouter } from 'react-router-dom';
import { Login, Sidebar } from './components';
import { AppSidebarProvider } from './contexts';
import { LoginProvider } from './contexts/LoginContext';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
};

export default App;
