
import { Box, Grid, Typography, useMediaQuery, useTheme, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import banner from '../../assets/banner.png'
import mobile from '../../assets/mobile.jpg'
import SelectForm from './SelectForm';


const useStyles = makeStyles({
    banner: {
        width: '100%',
        height: '600px',
        '@media (max-width:900px)': {
            height: '400px',
        },
    },
    bannerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 88,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Banner = () => {

    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const classes = useStyles()
    const styles = {
        heroContainer: {

            height: '600px',
            '@media (max-width:900px)': {
                height: '400px',
            },
            width: '100%',
            position: 'relative',

        },

    };

  
    const fontSize = {
        xs: '20px',
        sm: '30px',
        lg: '40px'
    }




    return (
        <Box
            className='banner'
            style={styles.heroContainer}
            marginTop={
                {
                    xs: '-8px',
                    sm: '0px'
                }
            }
        >
            <Box>
                <img className={classes.banner} src={isMatch ? mobile : banner} alt="" />
            </Box>
            <Grid
                container
                className={classes.bannerContainer}
            >
                <Grid item sm={12} lg={6}>
                    <Box sx={{
                        color: 'white',
                        fontSize: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        marginLeft: '30px',
                        '@media (max-width:780px)': {
                            justifyContent: 'center',
                            textAlign: 'center',
                        },
                    }}>
                        <Box >
                            <Typography sx={{ fontSize, fontWeight: 'bold' }}>Top House Cleaning Services</Typography>
                            <Typography sx={{ fontSize, fontWeight: 'bold' }}>in Delhi NCR</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={6} sx={{ justifyContent: 'center' }}>
                  {/*   <Box border={border} sx={{ display, height: '100%', width: '100%', }}>
                        <Box
                            width={{
                                xs: '300px',
                                sm: '430px',
                                md: '500px'
                            }}
                            sx={{

                                height: '380px',
                                display: 'flex',
                                justifyContent: 'center',
                                background: '#fff',
                                padding: '20px',
                                borderRadius: '4px',


                            }}>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value="Pest Control"
                                    sx={{ fontWeight: 'bold' }}
                                    fontSize={{
                                        xs: '12px',
                                        sm: '30px',
                                        lg: '40px'
                                    }
                                    }
                                >
                                    <MenuItem value="Pest Control">
                                        Pest Control
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    gap: 1,
                                    margin: '20px 0',
                                    color: '#919191'

                                }}>
                                    <TextField sx={{ color: '#919191' }} fullWidth value='Enter Name' id="fullWidth" />
                                    <TextField sx={{ color: '#919191' }} fullWidth value='Phone Number' id="fullWidth" />
                                </Box>
                                <Box>
                                    <TextField sx={{ color: '#919191' }} fullWidth value='Pincode or Address' id="fullWidth" />
                                </Box>
                                <Box sx={{ display, marginTop: '27px' }}>
                                    <Button variant="contained" sx={{
                                        background: '#004C97',
                                        width: '180px',
                                        padding: '14px 10px'
                                    }}>
                                        Submit
                                    </Button>
                                </Box>
                                <Box sx={{
                                    fontSize: '18px',
                                    marginTop: '20px',
                                    textAlign: 'center',
                                    color: '#707070'
                                }}>
                                    <Typography fontSize={{
                                        xs: '13px',
                                        sm: '16px',
                                        lg: '18px'
                                    }
                                    } variant='p' contents='p'>Average call back time : 12 min (Last update 5 mins ago)</Typography>
                                </Box>
                            </FormControl>
                        </Box>
                    </Box> */}
                    <SelectForm
                    isBorder={true}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;