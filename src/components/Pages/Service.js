import { makeStyles } from '@material-ui/styles';
import { shadows } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import img1 from '../../assets/service1.png'
import img2 from '../../assets/service2.png'
import img3 from '../../assets/sercvice3.png'
import img4 from '../../assets/service4.png'

const useStyles = makeStyles({
    cardContainer: {
        border: '1px solid #0B4868',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        position:'relative',
        height:'142px',
        width:'175px',
        display:'flex',
        justifyContent:'center',
        alignItems:'end',
        boxShadow:` 0px 3px 12px 0px #00000040`
            
    },
    cardImg: {
        width: '122px',
        height: '122px',
        position:'absolute',
        top:'0%',
        left:'50%',
        translate:'-50% -50%'

    },

})
const Service = () => {
    const classes = useStyles()
    return (
        <Box
            marginTop='70px'
        >
            <Box

            >
                <Typography
                    fontSize={
                        {
                            xs: '13px',
                            sm: '15px',
                            md: '18px',
                            lg: '23px'
                        }
                    }
                    textAlign='center'
                    fontWeight='bold'
                    marginBottom='35px'
                >
                    Choose Our Services
                </Typography>
            </Box>
            <Box
            marginTop='110px'
            >
                <Container
                maxWidth='1024px'
               
                >
                    <Grid
                        container
                        spacing={8}
                        marginBottom='30px'
                    >
                        <Grid item md={6} lg={3}>
                            <Box 
                            className={classes.cardContainer}
                            sx={{ boxShadow: 1}}
                            >
                                <Box>
                                    <Typography 
                                    variant='h5'
                                    contents='h5'
                                    sx={{fontSize:'18px',fontWeight:'500',padding:'0 10px 17px 10px',textAlign:'center'}}
                                    >
                                        Sofa Deep Cleaning
                                    </Typography>
                                </Box>
                                <Box>
                                    <img className={classes.cardImg} src={img3} alt="" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} lg={3}>
                            <Box className={classes.cardContainer}>
                                <Box>
                                    <Typography
                                     variant='h5'
                                     contents='h5'
                                     sx={{fontSize:'18px',fontWeight:'500',padding:'0 10px 17px 10px',textAlign:'center'}}
                                    >
                                       House Cleaning Services
                                    </Typography>
                                </Box>
                                <Box>
                                    <img className={classes.cardImg} src={img1} alt="" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} lg={3}>
                            <Box 
                            border={0}
                            className={`${classes.cardContainer} linear`}>
                                <Box>
                                    <Typography
                                     variant='h5'
                                     contents='h5'
                                     sx={{fontSize:'18px',fontWeight:'500',padding:'0 10px 17px 10px',textAlign:'center'}}
                                    >
                                        Bathroom Deep Cleaning
                                    </Typography>
                                </Box>
                                <Box>
                                    <img className={classes.cardImg} src={img2} alt="" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} lg={3}>
                            <Box className={classes.cardContainer}
                           
                            >
                                <Box>
                                    <Typography
                                     variant='h5'
                                     contents='h5'
                                     sx={{fontSize:'18px',fontWeight:'500',padding:'0 10px 17px 10px',textAlign:'center'}}
                                    >
                                        Kitchen Deep Cleaning
                                    </Typography>
                                </Box>
                                <Box>
                                    <img className={classes.cardImg} src={img4} alt="" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Service;