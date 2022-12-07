import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components';
import { AppSidebarProvider } from './contexts';
import { LoginProvider } from './contexts/LoginContext';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Login } from './pages';
import { ToastContainer } from 'react-toastify';
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
            <ReactQueryDevtools initialIsOpen={false}/>
            <ToastContainer />
        </QueryClientProvider>
    );
};

export default App;
