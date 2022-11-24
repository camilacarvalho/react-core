import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import Icon from '@mui/material/Icon';
import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useSidebarContext } from '../../contexts';

interface IListItemLink {
    to: string;
    icon: string;
    label: string;
    onClick:(() => void) | undefined;
}
const ListItemLink = ({ to, icon, label, onClick }: IListItemLink) => {
    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({path: resolvedPath.pathname, end:false});

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };
    return (<ListItemButton selected={!!match} onClick={handleClick}>
        <ListItemIcon>
            <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={label}/>
    </ListItemButton>);
};

type SidebarTypes = {
    children: React.ReactNode
}

const Sidebar = ({ children }: SidebarTypes) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const {isSidebarOpen, toggleSidebarOpen, sidebarOptions } = useSidebarContext();
    return (<>
        <Drawer open={isSidebarOpen} variant={smDown ? 'temporary' : 'permanent'}>
            <Box width={theme.spacing(28)} flexDirection="column" height="100%">
                <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                    <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt="girl icon" src="https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg" />
                </Box>
                <Divider />
                <Box flex={1}>
                    <List component="nav">
                        {sidebarOptions.map(sidebarOption => (
                            <ListItemLink key={sidebarOption.path} icon={sidebarOption.icon} to={sidebarOption.path} onClick={smDown?toggleSidebarOpen:undefined} label={sidebarOption.label} ></ListItemLink>
                        ))}
                       
                    </List>
                </Box>
            </Box>
        </Drawer>
        <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>{children}</Box>
    </>);
};

export default Sidebar;