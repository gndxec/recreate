import { AppBar, Button, Toolbar, Typography, Box, Drawer, Hidden, } from '@mui/material'
import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import recreate_titulo from '../assets/svg/recreate_letra.svg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link as RouterLink, Router } from 'react-router-dom';
import { Container } from '@mui/system';
import logo_ups from '../assets/img/logo_ups.png';
import logo_ups1 from '../assets/img/logo_ups1.png';
const list = [
    {
        title: 'Inicio',
        link: '/'
    },
    {
        title: 'Concurso',
        link: '/bases-concurso/'
    },
    {
        title: 'Desafíos',
        link: '/desafios'
    },
    {
        title: 'Cronograma',
        link: '/cronograma'
    },

];
export const Header = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar component={RouterLink} to="/">
      
                    <img alt='recreate 2022' width='100%' src={recreate_titulo} />
              
            </Toolbar>
            <Divider />
            <List>
                {list.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => setMobileOpen(false)} component={RouterLink} to={item.link}>
                            {/* <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon> */}
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );
    return (
        <Box sx={{ display: 'flex' }}>
            <Container>
                <AppBar elevation={0} position="static" color="transparent">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src={logo_ups1} width='75%' />
                        </Typography>

                        <Hidden smDown>
                            {list.map((item, index) => (
                                <Box px={1} key={index}>
                                    <Button component={RouterLink} to={item.link}>
                                        <Typography variant='h6'>
                                            <strong>{item.title}</strong>
                                        </Typography>
                                    </Button>
                                </Box>
                            ))}
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </Container>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
                }}
            >
                {drawer}
            </Drawer>
        </Box>

    )
}