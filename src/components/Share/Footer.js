import { List, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box, Container } from '@mui/system';
import React from 'react';
import googlPlay from '../../assets/play.png'
import linkedin from '../../assets/linkedin-logo 1.png'
import youtube from '../../assets/youtube.png'
import pinterst from '../../assets/pinterst.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
const useStyle = makeStyles({
    footerImg: {
        width: '130px',
        height: '37px'
    },
    footerIconImg: {
        width: '28px',
        height: '28px'
    }
})

const Footer = () => {
    const classes = useStyle()

    const center = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
    const footerFont = {
        xs: '14px',
        lg: '18px'
    }
    return (
        <div>
            <Box
                sx={{
                    backgroundColor: '#EDEDED',
                    padding: '50px 0',
                    marginTop:'75px'
                }}
            >
                <Container>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        flexDirection: 'column',
                        '@media (max-width:700px)': {
                            flexDirection: 'column-reverse',
                            gap: 2
                        },
                    }}
                    >
                        <Box
                            sx={
                                center

                            }
                        >
                            <List
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    '@media (max-width:700px)': {
                                        flexDirection: 'column',
                                        gap: 2
                                    },
                                }}
                            >
                                <ListItemText
                                    sx={
                                        center
                                    }
                                    primary='About Us' />
                                <ListItemText fontSize={footerFont} sx={center} primary='Blog' />
                                <ListItemText fontSize={footerFont} sx={center} primary='Terms & Conditions' />
                                <ListItemText fontSize={footerFont} sx={center} primary='Privacy Policy' />
                                <ListItemText fontSize={footerFont} sx={center} primary='Offers & Gift Cards' />
                                <ListItemText fontSize={footerFont} sx={center} primary='Contact Us' />
                            </List>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                                marginTop: '50px'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    gap: 4

                                }}
                            >
                                <Typography
                                    color="#025B5D" variant='p' contents='p'>Download Oyebusy App</Typography>
                                <img
                                    className={classes.footerImg}
                                    src={googlPlay} alt="" />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            marginTop: '50px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                gap: 4

                            }}
                        >
                            <img
                                className={classes.footerIconImg}
                                src={instagram} alt="" />
                            <img
                                className={classes.footerIconImg}
                                src={twitter} alt="" />
                            <img
                                className={classes.footerIconImg}
                                src={linkedin} alt="" />
                            <img
                                className={classes.footerIconImg}
                                src={youtube} alt="" />
                            <img
                                className={classes.footerIconImg}
                                src={pinterst} alt="" />
                        </Box>
                    </Box>
                    <Box
                        marginTop='30px'
                        textAlign='center'
                    >
                        <Typography variant='p' contents='p'>© 2022 House Cleaning Expert</Typography>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;