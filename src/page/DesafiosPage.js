import React from 'react'
import {
    Container,
} from '@mui/material'
import '../App.css'
import { Desafios } from '../components/desafios/Desafios';
export const DesafiosPage = () => {
    return (
        <>
            <Container maxWidth="xl">
              <Desafios />
            </Container>
        </>

    )
}