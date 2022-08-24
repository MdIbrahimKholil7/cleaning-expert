import { Divider, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/system';
import React from 'react';
import useData from '../hooks/useData'
import ReviewCard from './ReviewCard';
const Review = () => {
    const [workData] = useData()
    console.log(workData)
    return (
        <Box
            marginTop='60px'
            sx={{
                '@media (max-width:500px)': {
                    padding: '0 20px',
                },
            }}
        >
            <Box>
                <Typography
                    variant='h4'
                    contents='h4'
                    fontWeight='bold'
                    fontSize={{
                        xs: '23px',
                        md: '28px',
                        lg: '33px'
                    }}
                    sx={{
                        textAlign: 'center',
                        marginBottom: '36px',
                        '@media (max-width:500px)': {
                            textAlign: 'left'
                        },
                    }}
                >Customer reviews</Typography>
            </Box>
            <Box
                maxWidth='sm'
                margin='auto'
            >
                <Box>
                    <Typography variant='h4'
                        contents='h4'
                        fontWeight='bold'
                        fontSize={{
                            xs: '20px',
                            md: '25px',
                            lg: '31px'
                        }}
                        sx={{
                            textAlign: 'left',

                        }}

                    >
                        Avg. user rating
                    </Typography>
                    <Typography variant='h4'
                        contents='h4'
                        fontWeight='bold'
                        fontSize={{
                            xs: '27px',
                            md: '36px',
                            lg: '40px'
                        }}
                        sx={{
                            textAlign: 'left',
                            marginTop: '29px'
                        }}

                    >
                        <StarIcon
                            width='15px'
                            hight='14px'
                        /> 4.76
                    </Typography>
                    <Typography variant='h4'
                        contents='h4'
                        fontWeight='bold'
                        fontSize={{
                            xs: '11px',
                            md: '33px',
                            lg: '16px'
                        }}
                        sx={{
                            textAlign: 'left',
                            color: '#3C3C3C'
                        }}

                    >
                        347K reviews
                    </Typography>

                    <Box
                        marginTop='33px'
                        marginBottom='30px'
                    >
                        <Divider />
                    </Box>
                 {
                    workData?.reviews?.map((review,index)=><ReviewCard
                    key={index}
                    review={review}
                    />)
                 }
                </Box>
            </Box>
        </Box>
    );
};

export default Review;