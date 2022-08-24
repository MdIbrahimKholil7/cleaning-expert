
import { Divider, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';



const HouseCleaning = () => {
    return (
        <Box>
            <Box>
                <Typography fontSize={
                    {
                        xs: '16px',
                        sm: '19px',
                        md: '23px'
                    }
                }
                    sx={{ fontWeight: 'bold' }}
                >Top 10 House Cleaning Service in Delhi NCR :</Typography>
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
                    sx={{ fontWeight: 'bold', marginTop: '40px' }}
                >
                    Services Included in House Cleaning Services:
                </Typography>
                <Divider
                sx={{marginTop:'16px'}}
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
                            1. Includes of all Rooms Cleaning, Bathroom Cleaning, Kitchen Cleaning and Balcony Area
                        </ListItem>
                        <ListItem>
                            2. Cleaning
                        </ListItem>
                        <ListItem>
                            3. Ceiling dusting
                        </ListItem>
                        <ListItem>
                            4. Fans/Ac dusting & Cleaning
                        </ListItem>
                        <ListItem>
                            5. Walls dusting
                        </ListItem>
                        <ListItem>
                            6. Window and channel cleaning
                        </ListItem>
                        <ListItem>
                            7. Curtain Cleaning, Sofa Cleaning, mattress & carpet vacuuming
                        </ListItem>
                        <ListItem>
                            8. Glass Cleaning
                        </ListItem>
                        <ListItem>
                            9. ALl Wooden Furniture,Doors,etc.cleaning and Polishing
                        </ListItem>
                        <ListItem>
                            10. Floor Scrubbing
                        </ListItem>
                        <ListItem>
                            11. After removing the fridge, almariah, sofa and cleaning the floor the goods will be put back in place
                        </ListItem>
                        <ListItem>
                            12. Oil layer on the kitchen wall be removed by the kitchen cleaner Water stains, pans stains, or floor stains in the bathroom will be removed
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default HouseCleaning;