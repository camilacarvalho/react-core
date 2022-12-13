import { Box, Breadcrumbs, Link, Stack } from '@mui/material';
import Icon from '@mui/material/Icon';
import { useNavigate } from 'react-router-dom';

type BreadcrumbProps = {
    items: BreadcrumbItems[]
}

type BreadcrumbItems = {
    title: string, 
    link?: string
}

const Breadcrumb = ({items}: BreadcrumbProps) => {
    const navigate = useNavigate();

    const handleClick = (link: string) => {
        navigate(link);
    };
      
    return (
        <Box m={2} p={2}  sx={{ borderBottom: 1, borderColor: 'rgba(0, 0, 0, 0.12);'}}>
            <Breadcrumbs aria-label="breadcrumb" separator={<Icon>navigate_next</Icon>}>
                {
                    items.map((item, index)=> {
                        return (index===items.length-1) ?(
                            <Link
                                key='index'
                                underline="none"
                                color="text.primary"
                                aria-current="page"
                            >
                                {item.title}
                            </Link>
                            
                        ) : (
                            <Link sx={{cursor: 'pointer'}} key='index' underline="none" color="primary.main" onClick={() => handleClick(item?.link??'')}>
                                {item.title}
                            </Link>
                        );
                    })
                }

            </Breadcrumbs>
        </Box>
    );
};
export default Breadcrumb;