import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CleanDetails = () => {
    return (
        <div>
            <Container maxWidth='lg' sx={{ marginTop: '50px' }}>
                <Box >
                    <Box>
                        <Typography
                            fontSize={{
                                xs: '13px',
                                sm: '17px',
                                md: '19px'
                            }}
                            sx={{ fontWeight: 'bold' }}
                            variant='h4'
                            contents='h6'
                        >
                            House Cleaning Services in Delhi NCR :
                        </Typography>
                    </Box>
                    <Box 
                    paddingTop={{
                        xs:'10px',
                        sm:'20px',
                        md:'24px'
                    }}
                    sx={{paddingBottom:'50px'}}
                    >
                        <Typography
                        fontSize={{
                            xs: '14px',
                            sm: '19px',
                            lg:'21px'
                        }}
                         sx={{color: '#757575', marginTop: '50px', lineHeight: '34px' }} 
                         variant='p' 
                         contents='p'
                         >
                            Get home cleaning services in Delhi NCR, India. We have Well Equipped and Trained Team, who carries out Deep House Cleaning and Sanitization with Non-Hazardous Chemicals. Book well-trained and experienced team from OyeBusy to get your home deep cleaned thoroughly at your chosen time and location. We offer the most affordable home cleaning services in Delhi NCR, India for studios, apartments, and villas. Book home cleaning services on OyeBusy today.
                        </Typography>
                    </Box>

                </Box>
            </Container>
        </div>
    );
};

export default CleanDetails;