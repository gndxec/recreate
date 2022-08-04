import React, { useEffect, useState } from 'react'
import { Container, Box, Grid, Alert, Button, Link, Typography } from '@mui/material'
import { db, auth } from '../../db/firebase'
import { Reporteria } from '../../components/dashboard/Reportera';
import InputValidation from '../utils/InputValidations';
export const Login = () => {
    const [email, setEmail] = useState({ campo: '', valido: true })
    const [password, setPassword] = useState({ campo: '', valido: null })
    const [errorCreate, setError] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        try {
            if (email.valido === true && password.valido) {
                auth.signInWithEmailAndPassword(email.campo, password.campo)
                    .then((userCredential) => {
                        var user = userCredential.user;
                    })
                    .catch((error) => {
                        setError(error)
                    });
            }

        } catch (error) {
            setError(error)
        }
    }

    return (
        <Container>
            <Grid
                container
                component="main"
                alignItems="center"
                justifyContent="center"
            >
            
                <Grid item xs={12} sm={8} md={5} elevation={6}>
                
                    <Box pt={5}>
                        <Grid item xs={4} >
                            {/* <img width={150} src={logo} /> */}
                            <Typography>Iniciar sesion</Typography>
                        </Grid>
                        {/* <Typography color="textSecondary" variant="caption" display="block" >Sebastian Mite</Typography> */}
                        {errorCreate &&
                            <Box py={2}>
                                <Alert severity="error">
                                    {errorCreate.code == 'auth/wrong-password' && 'La contraseña no es válida.'}
                                    {errorCreate.code == 'auth/too-many-requests' && 'El acceso a esta cuenta se ha deshabilitado temporalmente... configurando su contraseña o puede volver a intentarlo más tarde.'}
                                    {errorCreate.code == 'auth/user-not-found' && 'No existe registro de usuario correspondiente a este identificador.'}
                                    {errorCreate.code == 'not-found-client' && errorCreate.message}
                                </Alert>
                            </Box>
                        }
                        <form onSubmit={submitHandler}>
                            <Box pt={2} pb={1}>
                                <InputValidation
                                    estado={email}
                                    cambiarEstado={setEmail}
                                    type="email"
                                    label="Correo electronico"
                                    name="email"
                                //helperText="Sólo correos asociados a la institución '@ups.edu.ec'."
                                //patterns={/^[a-zA-Z0-9_.+-]+@+(est\.)?(ups.edu.ec)/}
                                //disabled={loading}
                                />
                            </Box>
                            <Box pb={1}>
                                <InputValidation
                                    estado={password}
                                    cambiarEstado={setPassword}
                                    type="password"
                                    label="Contraseña"
                                    name="password"
                                    helperText="Minimo 8 caracteres"
                                    patterns={/^.{8,30}$/}
                                //disabled={loading}
                                />
                            </Box>
                            <Box pb={3}>
                                <Button variant="contained" fullWidth disableElevation disabled={!email.campo || !password.campo} type="submit" color="primary">
                                    Iniciar sesión
                                </Button>
                            </Box>
                        </form>
                     
                       
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}