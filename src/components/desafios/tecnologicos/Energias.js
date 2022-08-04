import React from 'react'
import { Card, Grid, Typography, CardContent, Box, Divider, Container } from '@mui/material'
import app from '../../../assets/img/app.png'
import meganico from '../../../assets/img/mecanico.png'
import bateria from '../../../assets/img/bateria.png'
import img2 from '../../../assets/img/robot.png'
import atomo from '../../../assets/img/atomo.png'
import redes from '../../../assets/img/redes.png'
export const Energias = () => {
    return (

        <>
            <Container
                maxWidth="xl"
            >
                <Box py={5}>
                    <Typography component="h1" variant="h1" color='primary.main'><strong>Desafíos tecnológicos</strong> </Typography>
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
                                    <Typography component="h3" variant="h3" color='primary.main'><strong>Optimización de Energías Renovables</strong> </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Typography variant="h5" paragraph>
                            Primer concurso en la modalidad de simulación de soluciones de electrificación
                            a lugares remotos sin acceso a la energía convencional.
                        </Typography>
                        <Typography variant="h5" paragraph color='primary.main'>
                            <strong>Requisitos mínimos a cumplir</strong>
                        </Typography>
                        <Typography variant="h5" paragraph>
                            •Cada equipo elaborará un proyecto basado en un sistema híbrido con los
                            siguientes parámetros:

                        </Typography>
                        <Box pb={2}>
                            <Typography component="h6" variant="h6" >Costo total del sistema. </Typography>
                            <Typography component="h6" variant="h6" >Costo de la energía.</Typography>
                            <Typography component="h6" variant="h6" >Carga no satisfecha y Escases de capacidad.</Typography>
                        </Box>


                        <Typography variant="h5" paragraph>
                            • El programa elegido para las simulaciones es HOMER.
                        </Typography>
                        <Grid container>
                            <Grid item lg={6}>
                                <Typography component="h6" variant="h6" color='primary.main'><strong>Datos porporcionados de entrada</strong> </Typography>
                                <Typography component="h6" variant="h6" >• Carga demandada (kW)</Typography>
                                <Typography component="h6" variant="h6" >• Radiación solar</Typography>
                                <Typography component="h6" variant="h6" >• Velocidad de flujo de agua</Typography>
                                <Typography component="h6" variant="h6" >• Velocidad del viento</Typography>
                                <Typography component="h6" variant="h6" >• Temperatura</Typography>
                            </Grid>
                            <Grid item lg={6}>
                                <Typography component="h6" variant="h6" color='primary.main'><strong> Matriz de evaluciòn tècnica 50/100:</strong></Typography>
                                <Typography component="h6" variant="h6" >•Desarollo de propuesta: 25/50</Typography>
                                <Typography component="h6" variant="h6" >•Obtención de resultados: 25/50</Typography>
                            </Grid>
                        </Grid>

                        <Box py={5} >
                            <div style={{ backgroundColor: '#ba90c0' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" >
                                        Del total de concursantes se selecciona tres trabajos para su defensa
                                        mediante una exposición pública de 10 min, donde se evalúa:
                                    </Typography>
                                    <Typography component="h6" variant="h6" >• Resultados obtenidos</Typography>
                                    <Typography component="h6" variant="h6" >• Dominio del tema</Typography>
                                    <Typography component="h6" variant="h6" >• Respuesta a preguntas formuladas por el jurado.</Typography>
                                </Box>
                            </div>
                        </Box>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#ba90c0' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" >
                                        Se capacitará en :
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Programa HOMER
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
                {/* Carrera de Robots Insecto */}
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
                                    <Typography component="h3" variant="h3" color='primary.main'><strong>Carrera de Robots Insecto</strong> </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Typography variant="h5" paragraph>
                            La necesidad de incentivar la integración de las diferentes ingenierías que
                            son incluidas en la mecatrónica como electrónica, mecánica, control y
                            programación, se ve agudizada debido a la situación de la pandemia a
                            nivel global, dejando la experiencia práctica de la academia con ciertas deficiencias.
                        </Typography>
                        <Typography variant="h5" paragraph color='primary.main'>
                            <strong>Requisitos mínimos a cumplir</strong>
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • La competencia consta de un circuito con distintos obstáculos donde
                            se evaluarán movimientos de los robots de tipo insecto desarrollados
                            por los equipos participantes.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Dimensiones máximas del robot 20 cm de largo y 20 cm de ancho. Sin
                            restricciones de altura ni peso.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Deberán ser autónomos en cuanto a su control y alimentación, sin cables
                            ni radio control. NO PODRÁ SER VOLADOR.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Deberán presentar patas como articulaciones (no se permitirán ruedas,
                            orugas u otro tipo de avance por desplazamiento)
                        </Typography>

                        <Box py={5} >
                            <div style={{ backgroundColor: '#9ac4c0' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" color='primary.main'>
                                        <strong>Matriz de Evaluación técnica :</strong>
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Tiempo en completar el recorrido (40%) 
                                      
                                    </Typography>
                                
                                    <Typography component="h6" variant="h6" >Distancia recorrida (40%)</Typography>
                                    <Typography component="h6" variant="h6" >Creatividad (20%)</Typography>
                                </Box>
                            </div>
                        </Box>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#9ac4c0' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" >
                                        Se capacitará en :
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Software: Arduino IDE, Software CAD (Inventor/SolidWorks)
                                    </Typography>
                                </Box>
                            </div>
                        </Box>
                    </Grid>

                </Grid>
                <Box py={5}>
                    <Divider />
                </Box>
                {/* Diseño óptimo de redes LAN/WLAN */}
                <Grid spacing={0}
                    container
                    component="main"
                    alignItems="center"
                    justify="flex-start"
                    style={{ minHeight: { xs: '', lg: '100vh' } }}>

                    <Grid item lg={7}>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#fce493' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h3" variant="h3" color='primary.main'><strong>Diseño óptimo de redes LAN/WLAN</strong> </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Typography variant="h5" paragraph>
                            Debido al avance de la tecnología todas las empresas dependen de la correcta
                            comunicación de sus verticales.
                            Por lo tanto se necesita tener una infalible infraestructura de red que permita
                            estar a la vanguardia de su negocio.
                            El diseño de redes LAN/WLAN da la oportunidad de que este esquema sea
                            viable.
                        </Typography>
                        <Typography variant="h5" paragraph color='primary.main'>
                            <strong>Requisitos mínimos a cumplir</strong>
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • La sucursal debe tener 5 host fijos, 4 host móviles.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • La matriz debe tener 1 servidor, 5 host principales y 5 host móviles.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • La dirección de red existente entre GYE-UIO es la 10.10.10.0/30.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • La dirección de red LAN/WLAN en GYE es 192.168.1.0/24.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • La dirección de red LAN/WLAN en GYE es 172.168.1.0/24.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Debe existir redundancia por RF entre la matriz y la sucursal.
                        </Typography>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#eaa870' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" color='primary.main'>
                                        <strong>Matriz de Evaluación técnica :</strong>
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                    •Topología: (5pts) 
                                    </Typography>
                                    <Typography component="h6" variant="h6" > •Diagrama de conexión: (5pts) </Typography>
                                    <Typography component="h6" variant="h6" > •Conexión LAN GYE: (5pts) </Typography>
                                    <Typography component="h6" variant="h6" > •Conexión WLAN GYE: (5pts) </Typography>
                                    <Typography component="h6" variant="h6" > •Conexión LAN UIO:  (5pts) </Typography>
                                    <Typography component="h6" variant="h6" > •Conexión WLAN UIO: (5pts) </Typography>
                                    <Typography component="h6" variant="h6" > •Conexión interurbana: (5pts) </Typography>
                                    <Typography component="h6" variant="h6" > •Funcionamiento de redundancia: (15pts) </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#eaa870' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" >
                                        Se capacitará en :
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Software: Packet TracerDiseño y configuración de Red
                                    </Typography>
                                </Box>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item lg={5}>
                        <img src={redes} width="100%" />
                    </Grid>
                </Grid>
                <Box py={5}>
                    <Divider />
                </Box>
                {/* Diseño óptimo de redes LAN/WLAN */}
                <Grid spacing={0}
                    container
                    component="main"
                    alignItems="center"
                    justify="flex-start"
                    style={{ minHeight: { xs: '', lg: '100vh' } }}>
                    <Grid item lg={5}>
                        <img src={meganico} width="100%" />
                    </Grid>
                    <Grid item lg={7}>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#fce493' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h3" variant="h3" color='primary.main'><strong>Control de motores de forma inalámbrica</strong> </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Typography variant="h5" paragraph>
                            La tendencias tecnológicas actuales utilizan diferentes medio de
                            comunicación según la problemática a resolver, entre ellas encontramos
                            las redes inalámbricas tal como conectarse a Internet en el hogar o trabajo.
                        </Typography>
                        <Typography variant="h5" paragraph color='primary.main'>
                            <strong>Requisitos mínimos a cumplir</strong>
                        </Typography>
                        <Typography variant="h5" paragraph>
                            La empresa BoscoTech requiere el diseño e implementación de
                            una aplicación para control de motores trifásicos desde un teléfono
                            inteligente, combinando así dispositivos industriales como LOGO
                            de Siemens y un dispositivo móvil con Android.
                        </Typography>

                        <Box py={5} >
                            <div style={{ backgroundColor: '#c0cddc' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" color='primary.main'>
                                        <strong>Matriz de Evaluación técnica 50/100:</strong>
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Diseño de arquitectura de red: 5pts
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Diseño de diagramas de control y fuerza: 5pts
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Cableado de control y fuerza: 10 pts
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Conexión inalámbrica entre LOGO y smartphone: 10 pts
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Funcionalidad de aplicación: 15pts
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Exposición: 5 pts.
                                    </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#c0cddc' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" >
                                        Se capacitará en :
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Software: LOGOSoft 8.3, CadeSimu, otros
                                    </Typography>
                                </Box>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <Box py={5}>
                    <Divider />
                </Box>
                {/* Diseños prototipos Automotrices */}
                <Grid spacing={0}
                    container
                    component="main"
                    alignItems="center"
                    justify="flex-start"
                    style={{ minHeight: { xs: '', lg: '100vh' } }}>

                    <Grid item lg={7}>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#fce493' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h3" variant="h3" color='primary.main'><strong> Diseños prototipos Automotrices</strong> </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Typography variant="h5" paragraph>
                            Desarrollos de ideas de movilidad unipersonal para mitigar la congestion
                            vehicularen nuestras ciudades.
                        </Typography>
                        <Typography variant="h5" paragraph color='primary.main'>
                            <strong>Requisitos mínimos a cumplir</strong>
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Manejo de Software gráfico.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Utilizar computadora y acceso al internet
                        </Typography>

                        <Box py={5} >
                            <div style={{ backgroundColor: '#fce493' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" color='primary.main'>
                                        <strong>Matriz de Evaluación técnica 50/100:</strong>
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Ensamble: 20%
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Cantidad de piezas utilizadas: 20%

                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Funcionalidad: 20 %

                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Tiempo de ensamble: 20%
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        • Creatividad: 20%
                                    </Typography>

                                </Box>
                            </div>
                        </Box>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#fce493' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" >
                                        Se capacitará en :
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Software Tinkercad
                                    </Typography>
                                </Box>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item lg={5}>
                        <img src={bateria} width="100%" />
                    </Grid>
                </Grid>
                {/* Desarrollo de APPs */}
                <Grid spacing={0}
                    container
                    component="main"
                    alignItems="center"
                    justify="flex-start"
                    style={{ minHeight: { xs: '', lg: '100vh' } }}>
                    <Grid item lg={5}>
                        <img src={app} width="100%" />
                    </Grid>
                    <Grid item lg={7}>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#fce493' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h3" variant="h3" color='primary.main'><strong>Desarrollo de APPs</strong> </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Typography variant="h5" paragraph>
                            El conocimiento de programación de aplicaciones para móviles ha pasado de
                            manera muy rápida de ser un conocimiento más, a ser una necesitad debido a la
                            rápida implantación y evolución de las plataformas móviles.
                            Esta rápida evolución crea incertidumbre sobre que tecnologías son las más
                            adecuadas para la programación de móviles. Una de las arquitecturas más implantada
                            es la proporcionada por el sistema Android.
                            En este concurso tendrás que crear una App que permita ayudar a proteger
                            el medio ambiente.
                        </Typography>
                        <Typography variant="h5" paragraph color='primary.main'>
                            <strong>Características de la App: </strong>
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Usar Bases de Datos
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Registros
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Google Maps
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Puntos
                        </Typography>
                        <Typography variant="h5" paragraph>
                            • Red Social
                        </Typography>

                        <Box py={5} >
                            <div style={{ backgroundColor: '#9aafc7' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" color='primary.main'>
                                        <strong>Matriz de Evaluación técnica 50/100:</strong>
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        •Diseño de la Interfaz: 10pts
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        •Originalidad de la App: 5pts

                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        •Sustentabilidad: 5 pts

                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        •Funcionalidad de aplicación: 20pts
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        •Exposición: 10 pts.
                                    </Typography>

                                </Box>
                            </div>
                        </Box>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#9aafc7' }}>
                                <Box p={1} pl={2}>
                                    <Typography component="h6" variant="h6" >
                                        Se capacitará en :
                                    </Typography>
                                    <Typography component="h6" variant="h6" >
                                        Software: Android Studio, Flutter
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