import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { auth } from '../../db/firebase'
import { Reporteria } from '../../components/dashboard/Reportera';
import { Login } from '../../components/dashboard/Login';
export const Dashboard = () => {
    const [checking, setChecking] = useState(true);
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            //Detectamos si el usuario esta logeado
            if (user) {
                console.log('user', user)
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
            setChecking(false);
        });
    }, [setIsAuth, setChecking])
    if (checking) {
        return (
            ''
        )
    }

    return (
        <Box
            sx={{
                mt: 8,
                py: [3, 6],
            }}
        >
            {
                isAuth === true ?
                    <Reporteria /> :
                    <Login />
            }
        </Box>
    )
}