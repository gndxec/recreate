import React from 'react'
import { Card, Grid, Typography, Container, Box, Divider } from '@mui/material'

import img2 from '../../../assets/img/robot.png'
import planeta from '../../../assets/img/planeta.png'
import foco from '../../../assets/img/foco.png'
export const Ambientales = () => {
    return (

        <>
            <Container
                maxWidth="xl"
            >
                <Box py={5}>
                    <Typography component="h1" variant="h1" color='primary.main'><strong>Desafios de seguridad y sostenibilidad ambiental</strong> </Typography>
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
                                    <Typography component="h3" variant="h3" color='primary.main'><strong>Creando un ambiente seguro y sin accidentes</strong> </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Typography variant="h5" paragraph>
                            A través de este concurso se busca que los estudiantes vean las oportunidades
                            de mejora dentro de la institución y que hagan una propuesta innovadora
                            para evitar la posible presencia de un accidente
                        </Typography>
                        <Typography variant="h5" paragraph color='primary.main'>
                            <strong>Requisitos mínimos a cumplir</strong>
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Definir un lugar que presente problemas de señalización, desorden, con
                            taminación, riesgos, hacinamientos, etc.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Grupo integrado por 5 personas
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Ajustar las acciones a proponer de acuerdo a la reglamentación ecuatoriana
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Hacer una propuesta innovadora en relación a cómo crear un ambiente
                            seguro y sin accidentes, la propuesta debe de incluir un presupuesto, personas beneficiarias.
                        </Typography>


                        <Box py={5} >
                            <div style={{ backgroundColor: '#f4bf8d' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" color='primary.main'><strong>Matriz de Evaluación técnica 50/100:</strong> </Typography>
                                    <Typography component="h6" variant="h6" >•Presentación de evaluación o inspección inicial del lugar seleccionado (10 puntos)</Typography>
                                    <Typography component="h6" variant="h6" >•Acciones aplicadas de mejorar de condiciones iniciales (15 puntos)</Typography>
                                    <Typography component="h6" variant="h6" >•Aplicación de mejoras propuestas (15 puntos)</Typography>
                                    <Typography component="h6" variant="h6" >•Comparación y mediciones de los beneficios obtenidos (10 puntos)</Typography>
                                </Box>
                            </div>
                        </Box>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#f4bf8d' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" >
                                        Se capacitará en :
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Recursos Informáticos (Software a utilizar, capacitaciones)
                                    </Typography>
                                </Box>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item lg={5}>
                        <img src={foco} width="100%" />
                    </Grid>
                </Grid>
                <Box py={5}>
                    <Divider />
                </Box>
                {/* BPA logrando un colegio verde */}
                <Grid spacing={0}
                    container
                    component="main"
                    alignItems="center"
                    justify="flex-start"
                    style={{ minHeight: { xs: '', lg: '100vh' } }}>
                    <Grid item lg={5}>
                        <img src={planeta} width="100%" />

                    </Grid>
                    <Grid item lg={7}>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#fce493' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h3" variant="h3" color='primary.main'><strong>BPA logrando un colegio verde</strong> </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Typography variant="h5" paragraph>
                            A través de este reto los estudiantes podrán mejorar la calidad ambiental de la
                            institución y evidenciarlo en una reducción de agua, energía y residuos,
                            por ejemplo presentando los registros de 6 meses atrás de los consumos de luz
                            y agua y luego compararlo con el resultado de implementar buenas prácticas
                            ambientales (BPA), que no es otra cosa que acciones muy sencilas que permiten
                            la aplicación de reducir, reusar y reciclar
                        </Typography>
                        <Typography variant="h5" paragraph color='primary.main'>
                            <strong>Requisitos mínimos a cumplir</strong>
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Reducir el consumo y el costo de los recursos (agua, energía, etc.).
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Disminuir la cantidad de residuos producidos y facilitar su reutilización.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Reducir las emisiones a la atmósfera, los ruidos y los vertidos de aguas.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Mejorar la gestión ambiental del Colegio.
                        </Typography>

                        <Box py={5} >
                            <div style={{ backgroundColor: '#c2dbc2' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" color='primary.main'>
                                        <strong>Matriz de Evaluación técnica 50/100:</strong>
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Desarollo de propuesta: 25/50
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Obtenciòn de resultados: 25/50
                                    </Typography>
                                    <Typography variant="h5" paragraph>
                                    Recursos a utilizar (Materiales)
                                    </Typography>
                                    <Typography variant="h5" paragraph>
                                    Planillas de servicios básicos de la institución.
                                    </Typography>
                                    <Typography variant="h5" paragraph>
                                    Registros de generación de desechos.
                                    Fotografías.
                                    </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#c2dbc2' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" color='primary.main'>
                                        <strong>Recursos a utilizar (Materiales)</strong>
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Planillas de la institución.
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Registros de generación de desechos.
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Fotografias.
                                    </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#c2dbc2' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" color='primary.main'>
                                        Se capacitará en :
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Hojas de cálculo microsoft u otro programa a fin al proyecto, en caso de
                                        ser necesario.
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