import { Divider, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Equipment = () => {
    return (
        <Box>

            <Box>
                <Typography
                    fontSize={
                        {
                            xs: '13px',
                            sm: '15px',
                            md: '18px'
                        }
                    }
                    sx={{ fontWeight: 'bold', marginTop: '140px' }}
                >
                    Materials & Equipment's Used In House Cleaning Services:
                </Typography>
                <Divider
                    sx={{ marginTop: '16px' }}
                />
                <Box>
                    <List
                        fontSize={
                            {
                                xs: '13px',
                                sm: '15px',
                                md: '18px'
                            }
                        }
                        sx={{}}
                    >
                        <ListItem>
                            1. Professional cleaning chemicals
                        </ListItem>
                        <ListItem>
                            2. Single-disc floor scrubber/handheld scrubber
                        </ListItem>
                        <ListItem>
                            3. Vacuum Cleaner
                        </ListItem>
                        <ListItem>
                            4. Microfiber Cloths for dusting
                        </ListItem>
                        <ListItem>
                            5. Mops, Scotch Brite / foam or scrubbers.
                        </ListItem>
                        <ListItem>
                            6. Ladders, bucket, wiper and mugs etc.
                        </ListItem>

                    </List>
                </Box>
            </Box>
            <Box>
                <Typography
                    fontSize={
                        {
                            xs: '13px',
                            sm: '15px',
                            md: '18px'
                        }
                    }
                    sx={{ fontWeight: 'bold', marginTop: '140px' }}
                >
                   Benefits Of Booking Us For Home Cleaning Services:
                </Typography>
                <Divider
                    sx={{ marginTop: '16px' }}
                />

                <Box>
                    <List
                        fontSize={
                            {
                                xs: '13px',
                                sm: '15px',
                                md: '18px'
                            }
                        }
                        sx={{}}
                    >
                        <ListItem>
                            1. Best price guarantee: We offer you the best and lowest price offered in the market. Five Star Rated Experts: Providing you with the top
                        </ListItem>
                        <ListItem>
                            2. certified and accomplished practitioners. Timely Service: Our specialists are committed to delivering timely services.
                        </ListItem>
                        <ListItem>
                            3. 100% safe chemicals usage: Our Experts use environmentally friendly chemical
                        </ListItem>


                    </List>
                </Box>
                <Box>
                    <Typography
                        fontSize={
                            {
                                xs: '13px',
                                sm: '15px',
                                md: '18px'
                            }
                        }
                        sx={{ fontWeight: 'bold', marginTop: '140px' }}
                    >
                        Safety Precautions Follows In House Cleaning Services:
                    </Typography>
                    <Divider
                        sx={{ marginTop: '16px' }}
                    />

                    <Box>
                        <List
                            fontSize={
                                {
                                    xs: '13px',
                                    sm: '15px',
                                    md: '18px'
                                }
                            }
                            sx={{}}
                        >
                            <ListItem>
                                1. Minimal touch contact & social distancing
                            </ListItem>
                            <ListItem>
                                2. Daily temperature monitoring.
                            </ListItem>
                            <ListItem>
                                3. Wearing masks and gloves.
                            </ListItem>
                            <ListItem>
                                4. Regular sanitization of hands.
                            </ListItem>
                            <ListItem>
                                5. Compliant of the Aarogaya Setu App.
                            </ListItem>


                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Equipment;