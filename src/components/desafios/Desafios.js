import React from 'react'
import {
    Button, Grid, Box, Typography
} from '@mui/material'

import { Link as RouterLink } from 'react-router-dom';
import Lottie from "lottie-react";

import manzana from '../../assets/json/manzana.json'
import manos from '../../assets/json/manos.json'
import estadisticas from '../../assets/json/estadisticas.json'

import '../../App.css'

export const Desafios = () => {
    return (
        <>
            <Box py={5}>
                <Typography align='center' component="h2" variant="h3" gutterBottom>
                    <strong>Contamos con tres categorías en las que puedes participar</strong>
                </Typography>
            </Box>

            <Grid
                container
                spacing={5}>
                <Grid item lg={4} xs={12}>
                    <Lottie animationData={manos} loop={true} />
                    <Typography align='center' color="secondary.main" component="h2" variant="h5"><strong>Tecnológia</strong> </Typography>
                    <Box style={{ textAlign: "center" }} py={4}>
                        <Button color="warning" style={{ borderRadius: '100px' }} component={RouterLink} to='/desafios/tecnologicos' variant="contained" size="large">
                            <Typography component="h2" variant="h6" >
                                VER DESAFÍOS
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Lottie animationData={manzana} loop={true} />
                    <Typography align='center' color="warning.main" component="h2" variant="h5"><strong>Seguridad y Sostenibilidad Ambiental</strong> </Typography>
                    <Box style={{ textAlign: "center" }} py={4}>
                        <Button color="success" style={{ borderRadius: '100px' }} component={RouterLink} to='/desafios/ambientales' variant="contained" size="large">
                            <Typography component="h2" variant="h6" >
                                VER DESAFÍOS
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Lottie animationData={estadisticas} loop={true} />
                    <Typography align='center' color="success.main" component="h2" variant="h5"><strong>Emprendimiento</strong> </Typography>
                    <Box style={{ textAlign: "center" }} py={4}>
                        <Button color="info" style={{ borderRadius: '100px' }} component={RouterLink} to='/desafios/emprendimiento' variant="contained" size="large">
                            <Typography component="h2" variant="h6" >
                                VER DESAFÍOS
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>

        </>

    )
}