import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components';
import { AppSidebarProvider, LoginProvider, ModalConfirmationContextProvider } from './contexts';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Login } from './pages';
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ModalConfirmationContextProvider>
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
            </ModalConfirmationContextProvider>
        </QueryClientProvider>
    );
};

export default App;
