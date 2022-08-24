import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import { makeStyles } from '@material-ui/styles';

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
        marginBottom: '5px'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    connector: {
        height: '50px',
        background: '#7575754D',
        width: '4px'
    }
})


const TimeLine = () => {
    const classes = useStyles()
    return (
        <Box marginTop='120px'>
            <Box>
                <Box
                    textAlign='center'
                >
                    <Typography>
                        How it Works
                    </Typography>
                    <Divider
                        sx={{ width: '130px', margin: '20px 0' }}
                    />
                </Box>

                <Box>
                    <Timeline
                        sx={{ height: '500px' }}
                    >
                        <TimelineItem>
                            <TimelineSeparator    >

                                <Box className={classes.imgContainer}>
                                    <img className={classes.img} src={icon1} alt="" />
                                </Box>
                                <TimelineConnector
                                    className={classes.connector}
                                />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography
                                    variant='h5'
                                    contents='h5'
                                    fontSize='18px'
                                    fontWeight='bold'

                                >Choose the Appliances</Typography>
                                <Typography
                                    variant='p'
                                    contents='p'
                                    fontSize='16px'
                                    color='#757575'
                                >Select the Service required</Typography>
                            </TimelineContent>

                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator    >

                                <Box className={classes.imgContainer}>
                                    <img className={classes.img} src={icon1} alt="" />
                                </Box>
                                <TimelineConnector
                                    className={classes.connector}
                                />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography
                                    variant='h5'
                                    contents='h5'
                                    fontSize='18px'
                                    fontWeight='bold'

                                >Choose the Appliances</Typography>
                                <Typography
                                    variant='p'
                                    contents='p'
                                    fontSize='16px'
                                    color='#757575'
                                >Select the Service required</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator    >

                                <Box className={classes.imgContainer}>
                                    <img className={classes.img} src={icon1} alt="" />
                                </Box>
                              {  <TimelineConnector
                                    className={classes.connector}
                                />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography
                                    variant='h5'
                                    contents='h5'
                                    fontSize='18px'
                                    fontWeight='bold'

                                >Choose the Appliances</Typography>
                                <Typography
                                    variant='p'
                                    contents='p'
                                    fontSize='16px'
                                    color='#757575'
                                >Select the Service required</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator    >

                                <Box className={classes.imgContainer}>
                                    <img className={classes.img} src={icon1} alt="" />
                                </Box>
                              {/*  <TimelineConnector
                                    className={classes.connector}
                                /> */}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography
                                    variant='h5'
                                    contents='h5'
                                    fontSize='18px'
                                    fontWeight='bold'

                                >Choose the Appliances</Typography>
                                <Typography
                                    variant='p'
                                    contents='p'
                                    fontSize='16px'
                                    color='#757575'
                                >Select the Service required</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Box>
            </Box>
        </Box>
    );
};

export default TimeLine;