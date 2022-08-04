import React from 'react'
import {
    Button, Container, Grid, Box, Typography, TableContainer, TableRow,
    TableHead, TableCell, Card, Paper, TableBody, Fab, CardContent
} from '@mui/material'
import recreate_titulo2 from '../assets/svg/recreate_letra.svg'
import { Link as RouterLink } from 'react-router-dom';
import Lottie from "lottie-react";
import data from '../assets/json/data.json'
import chicos from '../assets/json/chicos.json'
import chicas from '../assets/json/chicas.json'
import { ModalForm } from '../components/ModalForm';
import persona_premio from '../assets/svg/persona_premio.svg'
import personaje_telefono from '../assets/svg/personaje_telefono.svg'
import { Cronograma } from '../components/Cronograma';
import { ButtonWhatsapp } from '../components/ButtonWhatsapp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Wave from '../assets/svg/wave.svg'
import '../App.css'
import { Desafios } from '../components/desafios/Desafios';
export const HomePage = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${Wave})`,
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    backgroundSize: 'cover',
                    width: '100%',
                    opacity: 0.2,
                    height: '100%',
                    top: -200,
                    zIndex: -1
                }}
            >
            </div>
            <Container maxWidth="xl">
                <ButtonWhatsapp />
                <Box py={5}>
                    <Grid
                        spacing={0}
                        container
                        component="main"
                        alignItems="center"
                        justify="flex-start"
                        style={{ minHeight: { xs: '', lg: '100vh' } }}
                    >
                        <Grid item xs={12} lg={6} style={{ textAlign: "center" }} order={{ xs: 3, lg: 2 }}>
                            <img alt='recreate 2022' width='100%' src={recreate_titulo2} />
                            <Box py={4}>
                                <ModalForm />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6} order={{ xs: 2, lg: 3 }}>
                            <Lottie animationData={data} loop={true} />
                        </Grid>
                    </Grid>
                    <Container>
                        <Box py={1}>
                            <Typography variant="h5" paragraph>La Universidad Politécnica Salesiana sede Guayaquil realizará el Intercolegial
                                “Recréate School 2022” dirigido a estudiantes de los últimos años de colegio.
                            </Typography>
                        </Box>
                        <Box py={1}>
                            <Typography variant="h5" paragraph>Cada unidad educativa inscrita contará con docentes mentores de las distintas carreras acorde a los desafíos escogidos que estarán acompañándolos
                                durante todo el proceso del intercolegial.
                            </Typography>
                        </Box>
                        <Box py={1}>
                            <Typography variant="h5" paragraph>La finalidad de este intercolegial es MOTIVAR, FORTALECER Y
                                CREAR una cultura de investigación, emprendimiento y orientación profesional.
                            </Typography>
                        </Box>

                        <Desafios />
                        <Box py={5}>
                            <Typography align='center' variant="h5" paragraph gutterBottom>
                                Cada categoría contará con desafíos propuestas de las distintas carreras de la sede.
                            </Typography>
                            <Box style={{ textAlign: "center" }} py={4}>
                                <Button style={{ borderRadius: '100px' }} component={RouterLink} to='/bases-concurso/' variant="contained" size="large">
                                    <Typography component="h2" variant="h6" >
                                        BASES DEL CONCURSO
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Box py={5}>
                            <Typography color="secondary.main" align='center' variant="h2" paragraph gutterBottom>
                                <strong>PREMIOS</strong>
                            </Typography>

                            <Grid
                                spacing={5}
                                container
                                component="main"
                                alignItems="center"
                                justify="flex-start"
                                style={{ minHeight: { xs: '', lg: '100vh' } }}
                            >
                                <Grid item lg={6}>
                                    <Card style={{ backgroundColor: '#e8f5e9' }}>
                                        <CardContent>
                                            <Typography color="primary" align='center' variant="h2" paragraph gutterBottom>
                                                <strong>PARTICIPA POR DESCUENTOS ESPECIALES EN TUS CUOTAS ACADÉMICAS</strong>     </Typography>
                                        </CardContent>
                                    </Card>


                                </Grid>
                                <Grid item lg={6}>
                                <Lottie animationData={chicos} loop={true} />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Cronograma />
                        </Box>
                        <Box py={5}>
                            <Grid
                                container
                                component="main"
                            
                                justify="flex-start"
                         
                            >
                                <Grid item lg={6}>
                                    <Box pt={5}>
                                        <Box pt={5}></Box>
                                        <Box pt={5}></Box>
                                        <Box pt={5}></Box>
                                    <Typography align='center' variant="h3" gutterBottom>
                                        <strong>PARA MÁS INFORMACIÓN</strong>
                                    </Typography>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Fab style={{ width: '75px', height: '75px' }} color="success" aria-label="add">
                                                <WhatsAppIcon style={{ width: '50px', height: '50px' }} />
                                            </Fab>
                                        </Grid>
                                        <Grid item>  <Typography align='center' variant="h2" >
                                            <strong>0987873971</strong>
                                        </Typography></Grid>
                                    </Grid>
                                    </Box>
                                 
                                </Grid>
                                <Grid item lg={6}>
                                <Lottie animationData={chicas} loop={true} />
                                  
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>

            </Container>
        </>

    )
}