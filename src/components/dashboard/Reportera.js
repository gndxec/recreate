import React, { useEffect, useState } from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import { db, auth } from '../../db/firebase'
import { DataGrid, GridToolbarExportContainer, GridToolbarContainer, GridCsvExportMenuItem } from '@mui/x-data-grid';
export const Reporteria = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        db.collection("usuarios").get().then((querySnapshot) => {
            const data = querySnapshot.docs.map(item => { return { ...item.data(), id: item.id } })
            setData(data)
            console.log(data)
        });
    }
    const columns = [
        {
            field: 'created', headerName: 'INSCRIPCION', type: 'dateTime', width: 200,
            valueGetter: ({ value }) => value && value.toDate(),
        },
        { field: 'colegio', headerName: 'NOMBRE COLEGIO', width: 300 },
        { field: 'dTec', headerName: 'DESAFIO TECNOLOGICO', width: 200 },
        { field: 'dSeg', headerName: 'DESAFIO AMBIENTAL', width: 200 },
        { field: 'dEmp', headerName: 'DESAFIO EMPRENDIMIENTO', width: 200 },
        { field: 'nombres', headerName: 'NOMBRES ESTUDIANTES', width: 200 },
        { field: 'correo', headerName: 'CORREO ESTUDIANTES', width: 200 },

        { field: 'docente', headerName: 'DOCENTE TUTOR', width: 200 },
        { field: 'correoDocente', headerName: 'CORREO DOCENTE', width: 200 },
        { field: 'telefono', headerName: 'TELEFONO', width: 200 },
    ];
    const csvOptions = { delimiter: ';' };
    const CustomExportButton = (props) => (
        <GridToolbarExportContainer {...props}>
            <GridCsvExportMenuItem options={csvOptions} />
        </GridToolbarExportContainer>
    );
    const CustomToolbar = (props) => (
        <GridToolbarContainer {...props}>
            <CustomExportButton />
        </GridToolbarContainer>
    );
    const logout = () => (
 
        auth.signOut()
    )
    return (

        <Box px={2} sx={{ height: 600, width: '100%', fontFamily: 'default' }}>
            <Box py={2} 
            
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
            
              }}
            >
                <Typography>REPORTERIA</Typography>
                <Button color='error' onClick={() => logout()}>CERRAR SESION</Button>
            </Box>

            {data &&
                <DataGrid
                    rows={data}
                    columns={columns}
                    components={{
                        Toolbar: CustomToolbar,
                    }}
                />}
        </Box>

    )
}