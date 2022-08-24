
import { Box, useMediaQuery,useTheme } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Banner from '../Pages/Banner';
import CleanDetails from '../Pages/CleanDetails';
import Equipment from '../Pages/Equipment';
import FAQ from '../Pages/FAQ';
import HouseCleaning from '../Pages/HouseCleaning';
import QuickLinks from '../Pages/QuickLinks';
import Review from '../Pages/Review';
import SelectForm from '../Pages/SelectForm';
import Service from '../Pages/Service';
import TimeLine from '../Pages/TimeLine';
import Work from '../Pages/Work';

const Home = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
            <TimeLine />
            <Review />
            <QuickLinks />
            <Box
            sx={{
                maxWidth:'550px',
                margin:'120px auto',
                borderRadius: "4px",
                border: '1.51px solid #E7E7E7',
                display:`${isMatch ? 'none':'block'}`
            }}
            >
                <SelectForm />
            </Box>
        </div>
    );
};

export default Home;