import { Box, Drawer, IconButton, MenuItem, Select, Typography } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import logo from '../../assets/logo.png'
import phone1 from '../../assets/Phone1.png'
import phone2 from '../../assets/phone2.png'
const useStyles = makeStyles({
    logo: {
        width: 43,
        '@media (max-width:780px)': {
            width: 24
        },
        height: 'auto'
    },
});
const MobileHeader = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles()

    return (
        <Box sx={{ width: '100%' }}>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box sx={{ m: 5, color: '#001F5A', }}>
                    <Box sx={{marginBottom:'14px' }} >
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
                    <Box sx={{marginBottom:'14px' }}  >
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
                    <Box sx={{  fontWeight: 'bold' }} >
                        <Typography variant='p' components='h3'>Covid Disinfection</Typography>
                    </Box>

                </Box>
            </Drawer>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', width: '100%' }}>
                <IconButton
                    sx={{ color: "black", }}
                    onClick={() => setOpenDrawer(!openDrawer)}
                >
                    <MenuIcon color="white" />
                </IconButton>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ display: 'flex', color: '#000', alignItems: 'center' }}>
                        <img className={classes.logo} src={logo} alt='' />
                        <Box marginLeft={{
                            md: 3,
                            sm: 2,
                            xs: 1
                        }}>
                            <Typography
                                fontSize={{
                                    md: 20,
                                    sm: 15,
                                    xs: 12
                                }}
                                variant='p' component='h3'>Cleaning</Typography>
                            <Typography
                                fontSize={{
                                    md: 20,
                                    sm: 15,
                                    xs: 12
                                }}
                                variant='p' component='h3'>Expert</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box sx={{ display: 'flex', color: '#000', alignItems: 'center' }}>
                            <img className={classes.logo} src={phone1} alt='' />
                        </Box>
                        <Box sx={{ display: 'flex', color: '#000', alignItems: 'center' }}>
                            <img className={classes.logo} src={phone2} alt='' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};

export default MobileHeader;