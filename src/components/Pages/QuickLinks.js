import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

const QuickLinks = () => {
    return (
        <Box
        marginTop='120px'
        padding={{
            xs:'0 10px',
            md:'0px',
        }}
        >
            <Container maxWidth='lg'>
                <Box>
                    <Box>
                        <Typography
                            fontSize={{
                                xs: '31px',
                                lg: '33px'

                            }}
                            fontWeight='bold'
                        >Quick Links</Typography>
                    </Box>
                    <Box
                    marginTop='13px'
                    >
                        <Typography
                            fontSize={{
                                xs: '31px',
                                lg: '22px'

                            }}
                            fontWeight='bold'
                            marginBottom='8px'
                        >Serving in</Typography>
                        <Typography
                            fontSize={{
                                xs: '15px',

                            }}
                            color='#7C7C7C'
                            lineHeight='168%'
                            variant='article'
                            contents='article'
                        >
                            Ludhiana • Kochi • Kanpur • Agra • Bhopal • Guwahati • Vijayawada • Varanasi • Coimbatore • Thiruvananthapuram • Patna • Raipur • Nashik • Jabalpur • Jamshedpur • Dehradun • Meerut • Ranchi • Prayagraj • Amritsar • Gwalior • Kota • Aurangabad • Mysore • Guntur • Cuttack • Udaipur • Ahmedabad • Bangalore • Chennai • Delhi NCR • Chandigarh Tricity • Jaipur • Hyderabad • Kolkata • Mumbai • Pune • Nagpur • Visakhapatnam • Vadodara • Lucknow • Bhubaneswar • Surat • Indore • Rajahmundry • Madurai • Jodhpur • Kakinada • Warangal • Sonipat • Panipat • Karnal • Rohtak • Alwar
                        </Typography>
                    </Box>
                    <Box
                    margin='47px 0'
                    >
                        <Typography
                            fontSize={{
                                xs: '31px',
                                lg: '22px'

                            }}
                            fontWeight='bold'
                            marginBottom='8px'
                        >Also available in</Typography>
                        <Typography
                            fontSize={{
                                xs: '15px',


                            }}
                            color='#7C7C7C'
                            lineHeight='168%'
                            variant='article'
                            contents='article'
                            // display='flex'
                            cursor='pointer'
                        >
                            Full House Cleaning Service in Delhi NCR, India • Full House Cleaning Service in Kharkhari Jatmal, South Delhi, Delhi NCR, India • Full House Cleaning Service in Raja Garden, West Delhi, Delhi NCR, India • Full House Cleaning Service in Badusarai, South Delhi, Delhi NCR, India • Full House Cleaning Service in Nizamuddin West, South Delhi, Delhi NCR, India • Full House Cleaning Service in Kapashera, South Delhi, Delhi NCR, India • Full House Cleaning Service in Budh Vihar, North Delhi, Delhi NCR, India • Full House Cleaning Service in Karam Pura, West Delhi, Delhi NCR, India • Full House Cleaning Service in Yusuf Sarai, South Delhi, Delhi NCR, India • Full House Cleaning Service in Mandawali, East Delhi, Delhi NCR, India • <Typography
                            variant='span'
                            contents='span'
                            sx={{
                                textDecoration:'underline',
                                color:'#000000',
                                fontWeight:'bold'
                            }}
                            >See More</Typography>
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            fontSize={{
                                xs: '31px',
                                lg: '22px'

                            }}
                            fontWeight='bold'
                            marginBottom='8px'
                        >Services Offered</Typography>
                        <Typography
                            fontSize={{
                                xs: '15px',

                            }}
                            color='#7C7C7C'
                            lineHeight='168%'
                            variant='article'
                            contents='article'
                        >
                            Sofa Cleaning in Delhi NCR, India • Bathroom Cleaning in Delhi NCR, India • Kitchen Cleaning in Delhi NCR, India • Office Cleaning in Delhi NCR, India • Car Cleaning in Delhi NCR, India
                        </Typography>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default QuickLinks;