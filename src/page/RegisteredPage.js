import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { Form } from '../components/Form'
import dardo from '../assets/svg/dardo.svg'
import manos from '../assets/svg/manos.svg'
export const RegisteredPage = () => {
    useEffect(() => {
    }, [])
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
                    <Container component="main" maxWidth="sm" >
                        <Form />
                    </Container>
                </div>
            </div>
            
        </>


    )
}