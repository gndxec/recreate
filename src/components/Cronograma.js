import React from 'react'
import { Card, Grid, CardContent, Typography, Divider, Box } from '@mui/material'
const cronograma = [
    {
        title: 'INSCRIPCIONES',
        date: 'HASTA EL 19 DE AGOSTO',
        color: '#e8f5e9'
    },
    {
        title: 'CAPACITACIONES A PARTICIPANTES',
        date: '22 DE AGOSTO - 02 DE SEPTIEMBRE',
        color: '#ffccbc'
    },
    {
        title: 'DESARROLLÓ DE SOLUCIONES A DESAFÍOS',
        date: '05 DE SEPTIEMBRE - 26 SEPTIEMBRE',
        color: '#ffecb3'
    },
    {
        title: 'PRESENTACIÓN DE LOS PROYECTOS Y PREMIACIÓN',
        date: '30 DE SEPTIEMBRE',
        color: '#dcedc8'
    },

];
export const Cronograma = () => {
    return (
        <>
            <Box py={5}>
                <Typography align='center' variant="h2" paragraph gutterBottom>
                    <strong>Cronograma de actividades</strong>
                </Typography>
            </Box>
            <Grid
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
                container
                alignItems="center"
                justify="center"
                spacing={5}
            >
                {cronograma.map((item, index) => (
                    <Grid item index={index}>
                        <Card style={{ backgroundColor: item.color }}>
                            <CardContent>
                                <Typography align='center' component="div" variant="h5">
                                 <strong>{item.title}</strong> 
                                </Typography>
                                <Box py={2}>
                                    <Divider />
                                </Box>
                                <Typography align='center' variant="h6" color="text.secondary" component="div">
                                    {item.date}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}