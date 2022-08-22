import { Image } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Container, Select, MenuItem, FormHelperText, FormControl, InputLabel, } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../assets/logo.png'

const useStyles = makeStyles({
    logo: {
        width: 43,
        height: 'auto'
    },
});
const Header = () => {

    const classes = useStyles()

    return (
        <Box>
            <AppBar sx={{ backgroundColor: '#FFFFFF' }}>
                <Container maxWidth='xl' height={77} sx={{
                    margin: 0,
                    padding: 0
                }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Box sx={{ display: 'flex', color: '#000', alignItems: 'center' }}>
                            <img className={classes.logo} src={logo} alt='' />
                            <Box sx={{ marginLeft: '15px' }}>
                                <Typography variant='p' component='h3'>Cleaning</Typography>
                                <Typography variant='p' component='h3'>Expert</Typography>
                            </Box>
                        </Box>

                        <Box>
                            <FormControl sx={{ m: 1, color: '#001F5A', display: 'flex' }}>

                                <Box  sx={{ m: 1, color: '#001F5A', display: 'flex' }}>
                                    <Box sx={{ borderRight: '1px solid #B2B2B2', paddingRight: '10px' }} >
                                        <Select

                                            labelId="Input label"
                                            id="Select"
                                            value="Pest Control"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            defaultValue='Please'
                                            disableUnderline={true}
                                            variant='standard'
                                            sx={{ color: '#001F5A', fontWeight: 'bold' }}
                                        >
                                            <MenuItem value="Pest Control">
                                                Pest Control
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Box>
                                    <Box sx={{ borderRight: '1px solid #B2B2B2', paddingRight: '10px' ,paddingLeft: '10px'}} >
                                        <Select

                                            labelId="Input label"
                                            id="Select"
                                            value="Home Cleaning"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            defaultValue='Please'
                                            disableUnderline={true}
                                            variant='standard'
                                            sx={{ color: '#001F5A', fontWeight: 'bold' }}
                                        >
                                            <MenuItem value="Home Cleaning">
                                                Home Cleaning
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Box>
                                    <Box sx={{  paddingRight: '10px',paddingLeft: '10px',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold' }} >
                                       <Typography variant='p' components='h3'>Covid Disinfection</Typography>
                                    </Box>

                                </Box>
                            </FormControl>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;