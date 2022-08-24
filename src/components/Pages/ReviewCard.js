import { Divider, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/system';
import React from 'react';

const ReviewCard = ({ review }) => {
    const { custName, rating, review: reviews } = review || {}
    return (
        <div>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: '#D9D9D9',
                                padding: '7px',
                                borderRadius: '4px',
                                marginRight: '15px'
                            }}
                        >
                            <PersonIcon />
                        </Box>
                        <Box>
                            <Typography
                                fontSize={{
                                    xs: '12px',
                                    md: '15px',
                                    lg: '18px'
                                }}
                                fontWeight='bold'
                            >
                                {custName}
                            </Typography>
                            <Typography
                                fontSize={{
                                    xs: '11px',
                                    md: '12px',
                                    lg: '14px'
                                }}
                                color='#7D7D7D'
                            >
                                July 2022 • Noida, Uttar Pradsh 201301, India
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <StarIcon

                            sx={{
                                width: '11px',
                                height: '11px',
                                marginRight: '3px'
                            }}
                        />
                        <Typography
                            fontSize={{
                                xs: '12px',
                                lg: '14px'
                            }}
                        >
                            {rating}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        fontSize={{
                            xs: '11px',
                            md: '12px',
                            lg: '16px'
                        }}
                        color='#393939'
                        marginTop='16px'
                    >{reviews}</Typography>
                </Box>
                <Box
                    marginTop='30px'
                    marginBottom='30px'
                >
                    <Divider />
                </Box>
            </Box>
        </div>
    );
};

export default ReviewCard;