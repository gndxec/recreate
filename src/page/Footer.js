import React, { useEffect } from 'react'
import { Container, Grid, Typography, Link, IconButton } from '@mui/material'
import startups2 from '../assets/img/startups.png';
import logo_ups2 from '../assets/img/logo_ups.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link as RouterLink } from 'react-router-dom';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: '',
    description: ['Privacy policy', 'Sebastian Mite productions'],
  },
];
export const Footer = () => {
  useEffect(() => {
  }, [])
  return (
    <Container

      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid

        spacing={4}

        container
        component="main"
        alignItems="center"
        justify="flex-start"
      >
        <Grid item xs={5}>
          
          <img src={logo_ups2} width='100%' />

        </Grid>
        <Grid item xs={5}>
          <img src={startups2} width='100%' />
        </Grid>
        <Grid item xs={2}>
          <a target="_blank" src='https://m.facebook.com/CoworkingStartUPS.UPS/'>
            <IconButton >

              <FacebookIcon fontSize='large' />

            </IconButton>
          </a>
          <a target="_blank" href="https://www.instagram.com/coworkingstartups.ups/" >
            <IconButton >

              <InstagramIcon fontSize='large' />

            </IconButton>
          </a>
        </Grid>
        {/* {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map((item) => (
                                <li key={item}>
                                    <Link href="#" variant="subtitle1" color="text.secondary">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))} */}
      </Grid>

    </Container>
  )
}