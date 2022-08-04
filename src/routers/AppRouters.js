import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from '../components/Header';
import { HomePage } from '../page/HomePage';
import { Footer } from '../page/Footer';
import { RegisteredPage } from '../page/RegisteredPage';
import { BasesPage } from '../page/BasesPage';
import RestoreScroll from '../components/RestoreScroll';

import { Cronograma } from '../components/Cronograma';
import { Dashboard } from '../page/dashboard/Dashboard';
import { Energias } from '../components/desafios/tecnologicos/Energias';
import { DesafiosPage } from '../page/DesafiosPage';
import { Ambientales } from '../components/desafios/ambientales/Ambientales';
import { Emprendimiento } from '../components/desafios/emprendimiento/Emprendimiento';
export const AppRouters = () => {
    useEffect(() => {
    }, [])
    let theme = createTheme({
        typography: {
            fontFamily: [
                'Gill Sans MT',
            ].join(','),
            button: {
                //fontFamily: 'Trebuchet MS',
                borderRadius: 50
            }
        },
    });
    theme = responsiveFontSizes(theme);
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/reporteria/' element={<Dashboard />} />
                    <Route path='/registrate/' element={<RegisteredPage />} />
                    <Route path='/bases-concurso/' element={<BasesPage />} />
                    <Route path='/cronograma/' element={<Cronograma />} />
                    <Route path='/desafios/' element={<DesafiosPage />} />
                    <Route path='/desafios/tecnologicos' element={<Energias />} />
                    <Route path='/desafios/emprendimiento' element={<Emprendimiento />} />
                    <Route path='/desafios/ambientales' element={<Ambientales />} />
                </Routes>
                <RestoreScroll />
                <Footer />
            </ThemeProvider>
        </BrowserRouter>
    )
}