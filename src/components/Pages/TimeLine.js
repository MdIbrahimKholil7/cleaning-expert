import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import { makeStyles } from '@material-ui/styles';
import { Container, fontWeight } from '@mui/system';

const useStyles = makeStyles({
    imgContainer: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        padding: '10px',
        border: '2px solid #75757580',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5px',
        marginTop: '5px',
        '@media (max-width:500px)': {
            width: '20px',
            height: '20px',
        },
    },
    img: {
        width: '100%',
        height: '100%',
    },
    connector: {
        height: '50px',
        background: '#7575754D',
        width: '4px'
    },
    timeLine:{
        width:'100vw !important'
    }
})

const workTitle = {

    xs: '16px',
    md: '18px',
    lg: '22px'

}

const font = {

    xs: '12px',
    md: '15px',
    lg: '18px'

}

const font1 = {

    xs: '11px',
    md: '13px',
    lg: '16px'

}

const TimeLine = () => {
    const classes = useStyles()
    return (
        <Box marginTop='120px'>
            <Box>
                <Box
                    textAlign='center'
                >
                    <Typography
                        fontSize={
                            workTitle
                        }
                        sx={{
                            color: '#025B5D',
                            fontWeight: 'bold',

                            marginBottom: '7px'
                        }}
                    >
                        How it Works
                    </Typography>
                    <Box
                        sx={{

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Divider
                            sx={{
                                width: '80px',
                                background: '#757575',
                                height: '3px'
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{

                        display: 'flex',
                        justifyContent: 'start'
                    }}
                >
                    <Container
                        maxWidth='lg'
                        sx={{

                            display: 'flex',
                            justifyContent: 'start',
                            marginLeft:'-50px',
                            '@media (max-width:500px)': {
                                marginLeft: '-140px',
                            },
                        }}
                    >
                        <Timeline
                        
                        align='left'
                        >
                            <TimelineItem>
                                <TimelineSeparator    >

                                    <Box className={classes.imgContainer}>
                                        <img className={classes.img} src={icon2} alt="" />
                                    </Box>
                                    <TimelineConnector
                                        className={classes.connector}
                                    />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography
                                        variant='h5'
                                        contents='h5'
                                        fontSize={font}
                                        fontWeight='bold'

                                    >Choose the Appliances</Typography>
                                    <Typography
                                        variant='p'
                                        contents='p'
                                        fontSize={font1}
                                        color='#757575'
                                    >Select the Service required</Typography>
                                </TimelineContent>

                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator    >

                                    <Box className={classes.imgContainer}>
                                        <img className={classes.img} src={icon4} alt="" />
                                    </Box>
                                    <TimelineConnector
                                        className={classes.connector}
                                    />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography
                                        variant='h5'
                                        contents='h5'
                                        fontSize={font}
                                        fontWeight='bold'

                                    >
                                        Choose your time-slot
                                    </Typography>
                                    <Typography
                                        variant='p'
                                        contents='p'
                                        fontSize={font1}
                                        color='#757575'
                                    >We serve from 9am-9pm</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator    >

                                    <Box className={classes.imgContainer}>
                                        <img className={classes.img} src={icon1} alt="" />
                                    </Box>
                                    {<TimelineConnector
                                        className={classes.connector}
                                    />}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography
                                        variant='h5'
                                        contents='h5'
                                        fontSize={font}
                                        fontWeight='bold'

                                    >Choose from our partners</Typography>
                                    <Typography
                                        variant='p'
                                        contents='p'
                                        fontSize={font1}
                                        color='#757575'
                                    >Verified Professionals</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator    >

                                    <Box className={classes.imgContainer}>
                                        <img className={classes.img} src={icon3} alt="" />
                                    </Box>
                                  
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography
                                        variant='h5'
                                        contents='h5'
                                        fontSize={font}
                                        fontWeight='bold'

                                    >Hassle-free service</Typography>
                                    <Typography
                                        variant='p'
                                        contents='p'
                                        fontSize={font1}
                                        color='#757575'
                                    >24*7, verifed professionals</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default TimeLine;