import React from 'react'
import { Fab, Box } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const ButtonWhatsapp = () => {
    return (
        <Box style={{
            position: 'fixed',
            bottom: 0,
            right: 0
        }}>
            <Box pb={2} pr={2}>
                <a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send?phone=593987873971&text=Necesito%20más%20información%20sobre%20el%20evento%20de%20recreate'>
                    <Fab style={{ width: '75px', height: '75px'  }} size='large' color="success" aria-label="add">
                       
                        <WhatsAppIcon style={{ width: '50px', height: '50px'  }} fontSize='large' />
                      
                   
                    </Fab>
                </a>
            </Box>
        </Box>
    )
}