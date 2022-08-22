import { makeStyles } from '@material-ui/styles';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, } from '@mui/material';
import React from 'react';
import banner from '../../assets/banner.png'

const useStyles = makeStyles({
    banner: {
        width: '100%',
        height: "600px",

    },
    bannerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 88
    }
})

const Banner = () => {
    const classes = useStyles()
    const styles = {
        heroContainer: {
            height: 600,
            width: '100%',
            position: 'relative',

        },

    };

    const display = {
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    }

    return (
        <Box
            className='banner'
            style={styles.heroContainer}
        >
            <Box>
                <img className={classes.banner} src={banner} alt="" />
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
                        marginLeft: '30px'
                    }}>
                        <Box >
                            <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>Top House Cleaning Services</Typography>
                            <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>in Delhi NCR</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={6}>
                    <Box sx={{ display, height: '100%', width: '100%', }}>
                        <Box sx={{
                            width: '500px',
                            height: '380px',
                            display: 'flex',
                            justifyContent: 'center',
                            background: '#fff',
                            padding: '20px',
                            borderRadius:'6px'
                        }}>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value="Pest Control"
                                    sx={{ fontWeight: 'bold' }}
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
                                    <TextField sx={{color: '#919191'}} fullWidth value='Enter Name' id="fullWidth" />
                                    <TextField sx={{color: '#919191'}} fullWidth value='Phone Number' id="fullWidth" />
                                </Box>
                                <Box>
                                    <TextField sx={{color: '#919191'}}  fullWidth value='Pincode or Address' id="fullWidth" />
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
                                <Box sx={{fontSize:'18px',
                                marginTop:'20px', 
                                textAlign:'center',
                                color: '#707070'
                                }}>
                                    <Typography variant='p' contents='p'>Average call back time : 12 min (Last update 5 mins ago)</Typography>
                                </Box>
                            </FormControl>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;