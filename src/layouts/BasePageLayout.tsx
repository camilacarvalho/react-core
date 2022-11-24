import { Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useSidebarContext } from '../contexts';

type BasePageLayoutProps = {
    title: string;
    children: React.ReactNode;
    barraDeFerramentas: React.ReactNode
}
const BasePageLayout = ({ title, children, barraDeFerramentas }: BasePageLayoutProps) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const {toggleSidebarOpen} = useSidebarContext();
    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box display='flex' alignItems='center' gap={1} padding={1} height={theme.spacing(smDown?6:mdDown?8:12)}>
                {smDown && (<IconButton onClick={toggleSidebarOpen}>
                    <Icon>menu</Icon>
                </IconButton>)}
                <Typography variant={smDown?'h5':mdDown?'h4':'h3'} component='label' overflow='hidden' whiteSpace='nowrap' text-overflow='ellipses'>{title}</Typography>
            </Box>
            
            {barraDeFerramentas && (<Box>{barraDeFerramentas}</Box>)}

            <Box flex={1} overflow='auto' >{children}</Box>

        </Box>);
};

export default BasePageLayout;