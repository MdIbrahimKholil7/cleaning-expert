import { Button, Container, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';

const SelectForm = ({ isBorder }) => {

    const [pest, setPest] = useState('Pest Control')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [pincode, setPincode] = useState('')
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

        <Box border={isBorder && border} sx={{ display, height: '100%', width: '100%', }}>
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
                        value={pest}
                        sx={{ fontWeight: 'bold' }}
                        fontSize={{
                            xs: '12px',
                            sm: '30px',
                            lg: '40px'
                        }
                        }
                        onChange={(e) => setPest(e.target.value)}
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
                        <TextField
                            sx={{ color: '#919191' }}
                            placeholder='Enter Name'
                            onChange={(e) => setName(e.target.value)}
                            fullWidth 
                            value={name} id="fullWidth"
                        />
                        <TextField
                            sx={{ color: '#919191' }}
                            onChange={(e) => setNumber(e.target.value)}
                            fullWidth 
                            placeholder='Enter Number'
                            value={number} id="fullWidth"
                        />
                    </Box>
                    <Box>
                        <TextField
                            sx={{ color: '#919191' }}
                            onChange={(e) => setPincode(e.target.value)}
                            fullWidth 
                            placeholder='Pincode or Address'
                            value={pincode}
                            id="fullWidth" />
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