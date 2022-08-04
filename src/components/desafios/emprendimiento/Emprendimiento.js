import React from 'react'
import { Card, Grid, Typography, Container, Box, Divider } from '@mui/material'
import app from '../../../assets/img/app.png'
import meganico from '../../../assets/img/mecanico.png'
import bateria from '../../../assets/img/bateria.png'
import img2 from '../../../assets/img/robot.png'
import atomo from '../../../assets/img/atomo.png'
import redes from '../../../assets/img/redes.png'
export const Emprendimiento = () => {
    return (
        <>
          <Container
                maxWidth="xl"
            >

         
            <Box py={5}>
                <Typography component="h1" variant="h1" color='primary.main'><strong>Desafios de emprendimiento</strong> </Typography>
            </Box>
            <Grid
                container
                component="main"
                alignItems="center"
                justify="flex-start"
                style={{ minHeight: { xs: '', lg: '100vh' } }}
            >
                <Grid item lg={7}>
                    <Box py={5} >
                        <div style={{ backgroundColor: '#fce493' }}>
                            <Box p={1} pl={2}>
                                <Typography component="h3" variant="h3" color='primary.main'><strong>Registros contables iniciales de un nuevo negocio</strong> </Typography>
                            </Box>
                        </div>
                    </Box>
                    <Typography variant="h5" paragraph>
                        Los registros, la contabilidad y su interpretación es pieza fundamental para
                        conocer la operatividad de un nuevo negocio. La correcta aplicación de las
                        bases contables, aseguran estados financieros reales y por lo tanto se
                        aseguran buenas decisiones.
                    </Typography>
                    <Typography variant="h5" paragraph color='primary.main'>
                        <strong>Requisitos mínimos a cumplir</strong>
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Los participantes identifican los bienes, derechos y obligaciones necesarios para
                        iniciar a operar un tipo de negocio propuesto por los organizadores, y lo plasman en un estado financiero a fin de mostrar la posición inicial de la empresa.
                        Posteriormente, haciendo uso de CONTIFICO registran transacciones
                        propuestas y muestran la operación del primer mes
                    </Typography>

                    <Grid container>
                        <Grid item lg={6}>
                            <Typography component="h6" variant="h6" color='primary.main'><strong> Matriz de evaluciòn tècnica 50/100:</strong></Typography>
                            <Typography component="h6" variant="h6" >Los participantes realizarán una exposición donde detallarán las acciones
                                ejecutadas, mismas que se evaluarán de la siguiente manera:</Typography>

                        </Grid>
                        <Grid item lg={6}>

                            <Typography component="h6" variant="h6" >• Personificación de cuentas contables (5 puntos)</Typography>
                            <Typography component="h6" variant="h6" >• Identificar obligaciones con el SRI (10 puntos)</Typography>
                            <Typography component="h6" variant="h6" >• Presentación de estado de situación financiera de apertura y
                                cierre al primer mes (20 puntos)</Typography>
                            <Typography component="h6" variant="h6" >• Desarrollo de transacciones (10 puntos)</Typography>
                            <Typography component="h6" variant="h6" >• Uso y manejo del sistema contable CONTIFICO (5 puntos)</Typography>
                        </Grid>

                    </Grid>

                    <Box py={5} >
                        <div style={{ backgroundColor: '#ead8ea' }}>
                            <Box p={1} pl={2}>
                                <Typography component="h6" variant="h6" color='primary.main'>
                                    Se capacitará en :
                                </Typography>
                                <Typography component="h6" variant="h6" >
                                    Capacitación en CONTIFICO
                                </Typography>
                            </Box>
                        </div>
                    </Box>
                </Grid>
                <Grid item lg={5}>
                    <img src={atomo} width="100%" />
                </Grid>
            </Grid>
            <Box py={5}>
                <Divider />
            </Box>
            {/* Diseño de un Plan de Negocios para el microemprendimiento */}
            <Grid spacing={0}
                container
                component="main"
                alignItems="center"
                justify="flex-start"
                style={{ minHeight: { xs: '', lg: '100vh' } }}>
                <Grid item lg={5}>
                    <img src={img2} width="100%" />

                </Grid>
                <Grid item lg={7}>
                    <Box py={5} >
                        <div style={{ backgroundColor: '#fce493' }}>
                            <Box p={1} pl={2}>
                                <Typography component="h3" variant="h3" color='primary.main'><strong>Diseño de un Plan de Negocios para el microemprendimiento</strong> </Typography>
                            </Box>
                        </div>
                    </Box>
                    <Typography variant="h5" paragraph>
                        Existe una gran cantidad de emprendimientos que surgen debido a la falta de
                        un empleo formal, y por desconocimiento del mismo no se plantea un adecuado
                        modelo de negocios para que estas PYMES crezcan y se fortalezcan en el
                        mercado.
                    </Typography>
                    <Typography variant="h5" paragraph color='primary.main'>
                        <strong>Requisitos mínimos a cumplir</strong>
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Cada Unidad Educativa elaborará un Plan de negocios para pequeños
                        emprendimientos el cual deberá contener una estructura genérica para ser
                        aplicado a diversos tipos de negocios.
                    </Typography>

                    <Box py={5} >
                        <div style={{ backgroundColor: '#9aafc7' }}>
                            <Box p={1} pl={2}>
                                <Typography component="h6" variant="h6" color='primary.main'>
                                    <strong>Matriz de Evaluación técnica 50/100:</strong>
                                </Typography>
                                <Typography component="h6" variant="h6" >
                                    Los concursantes expondran su propuesta del Plan de Negocios donde se podra
                                    evaluar:
                                </Typography>
                            </Box>
                        </div>
                    </Box>
                    <Box py={5} >



                        <Typography component="h6" variant="h6" >• Aplicación de herramientas y técnicas para obtener</Typography>
                        <Typography component="h6" variant="h6" >• Elaboración del Formato del Plan de Negocios (10 pts) </Typography>

                        <Typography component="h6" variant="h6" >• Estrategia aplicadas al modelo del Plan de Negocios (Plan económico) (10 pts) </Typography>
                        <Typography component="h6" variant="h6" >• Conformación de aspectos legales para la creación del negocio (5 pts) </Typography>
                        <Typography component="h6" variant="h6" >• Presentación del Plan de Negocios (15 pts)</Typography>

                    </Box>
                    <Box py={5} >
                        <div style={{ backgroundColor: '#9aafc7' }}>
                            <Box p={1} pl={2}>
                                <Typography component="h6" variant="h6" >
                                    Se capacitará en :
                                </Typography>
                                <Typography component="h6" variant="h6" >
                                    Sobre plan de negocios
                                </Typography>
                            </Box>
                        </div>
                    </Box>
                </Grid>

            </Grid>


            </Container>
        </>
    )
}