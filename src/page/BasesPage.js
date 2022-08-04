import React, { useEffect } from 'react'
import { Container, Box, Typography, Divider, CardContent, Card } from '@mui/material'
import Wave from '../assets/svg/wave.svg'
import zIndex from '@mui/material/styles/zIndex';
import dardo from '../assets/svg/dardo.svg'
import manos from '../assets/svg/atomo.svg'
const rules = [
    {
        rule: '• Podrán participar estudiantes de 2do y 3ero de bachillerato.',
    },
    {
        rule: '• Los participantes deberán armar equipos de mínimo tres y máximo cinco personas y deberán contarar con un docente tutor de su institución educativa.',
    },
    {
        rule: '• Cada estudiante podrá participar en uno o más desafíos, NO HAY LÍMITES.',
    },
    {
        rule: '• El docente tutor de la institución educativa sólo podrá participar como mentor hasta un máximo de 3 equipos del mismo plantel.',
    },
    {
        rule: '• El tutor del equipo participante realizará la inscripción.',
    },
    {
        rule: '• Cada participante expresamente autoriza a los organizadores a difundir por los medio de comunicación que considere oportunos sus nombres en caso de obtener un premio en el concurso.',
    },
    {
        rule: '• Cada uno de los desafíos cuenta con su propia estructura de requisitos mínimos a cumplir por lo que cada equipo deberá estar atento para poder trabajar en la solución',
    },


];
export const BasesPage = () => {
    return (
        <>
            <div
                style={{

                    backgroundImage: `url(${dardo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right top',
                    backgroundSize: '25%',

                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${manos})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left',
                        backgroundSize: '25%'
                    }}
                >


                    <div
                        style={{
                            backgroundImage: `url(${Wave})`,
                            backgroundRepeat: 'no-repeat',
                            position: 'absolute',
                            backgroundSize: 'cover',
                            width: '100%',
                            opacity: 0.1,
                            height: '100%',
                            top: -300,
                            zIndex: -1
                        }}
                    >
                    </div>
                    <Container
                        sx={{
                            mt: 8,
                            py: [3, 6],
                        }}
                    >
                        <Typography component="h1" variant="h1" color='primary.main' ><strong>Bases del concurso</strong></Typography>
                        <Box py={4}>
                            <Divider />
                        </Box>
                        <Box py={5} >
                            <div style={{ backgroundColor: '#fce493' }}>
                                <Box p={1} pl={2}>
                                    <Typography variant="h5" color='primary.main'><strong>¿En qué consisten los desafíos?</strong></Typography>
                                </Box>
                            </div>
                        </Box>

                        <Typography variant="h5" paragraph>
                            Los desafíos son una forma de aprendizaje basada en retos, en el que los
                            participantes propondrán soluciones a partir de la problemática planteada por
                            las carreras.
                        </Typography>



                        <Box py={5} >
                            <div style={{ backgroundColor: '#fce493' }}>
                                <Box p={1} pl={2}>
                                    <Typography variant="h5" color='primary.main'><strong>¿Quiénes pueden participar ?</strong></Typography>
                                </Box>
                            </div>
                        </Box>


                        {rules.map((item, index) => (
                            <Typography variant="h5" key={index} paragraph>
                                {item.rule}
                            </Typography>
                        ))}
                        <Box py={5} >
                            <div style={{ backgroundColor: '#e8f5e9' }}>
                                <Box p={1} pl={2}>
                                    <Typography variant="h5" color='primary.main'><strong>Criterios de puntaje
                                    </strong></Typography>
                                </Box>
                            </div>
                        </Box>
                        <Card style={{ backgroundColor: '#b8c7d7' }}>
                            <CardContent>
                                <Typography variant="h5" color='primary.main'><strong>• Conocimientos técnicos: 50/100</strong></Typography>
                                <Typography variant="h5" color='primary.main'><strong>• Rúbrica de evaluación del jurado: 50/100</strong></Typography>
                            </CardContent>
                        </Card>
                    </Container>
                </div>
            </div>
        </>
    )
}