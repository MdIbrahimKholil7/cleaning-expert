import { Button, Container, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SelectForm = ({isBorder}) => {

    const display = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const border = {
           '@media (max-width:900px)': {
               border: '1px solid #E7E7E7',
               borderRadius: "4px"
           },
   
    }

    return (
        
            <Box border={ isBorder && border} sx={{ display, height: '100%', width: '100%', }}>
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
            </Box>
        
    );
};

export default SelectForm;