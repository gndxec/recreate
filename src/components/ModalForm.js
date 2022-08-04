import React, { useState } from 'react'
import {  Box, DialogContent, Dialog, DialogTitle, Button, Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Form } from './Form';
export const ModalForm = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Button style={{ borderRadius: '500px', paddingRight: 40, paddingLeft: 40, paddingBottom: 15, paddingTop: 15 }} onClick={() => setOpen(true)} variant="contained" size="large">  <Typography  component="h2" variant="h6" >REGISTRATE AQUÍ </Typography></Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle sx={{ m: 0, p: 2 }} >
                    Registrate
                    <IconButton
                        aria-label="close"
                        onClick={() => setOpen(false)}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Form />
                </DialogContent>
            </Dialog>
        </Box>
    )
}