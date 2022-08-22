import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Banner from '../Pages/Banner';
import CleanDetails from '../Pages/CleanDetails';
import Equipment from '../Pages/Equipment';
import FAQ from '../Pages/FAQ';
import HouseCleaning from '../Pages/HouseCleaning';
import Service from '../Pages/Service';
import Work from '../Pages/Work';

const Home = () => {
    const border = {
        border: '1px solid #E7E7E7',
        borderRadius: "4px"
    }
    return (
        <div>
            <Banner />
            <CleanDetails />
            <Work />
            <Container
                maxWidth='md'
                sx={{ marginTop: '110px' }}
            >
                <Box

                    border={border}
                    sx={{ padding: '20px' }}
                >
                    <HouseCleaning />
                    <Equipment />
                </Box>
            </Container>
            <FAQ />
            <Service />
        </div>
    );
};

export default Home;