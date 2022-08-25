
import { Box } from '@mui/system';
import { Container, Typography, useMediaQuery,useTheme } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/styles';
import useData from '../hooks/useData';
import { useRef } from 'react';



const useStyles = makeStyles({
    carouselImg: {
        height: '200px',
        width: 'auto',
        margin: '0 20px'
    }
})


const Work = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const [workData] = useData()
    const sliderRef = useRef(null)
    const classes = useStyles()
    const settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: 5,
        centerMode: true,
        speed: 1000,
        slidesToScroll: 5,
        centerPadding: 0,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const arrowBtn={
        backgroundColor:'#000000',
        width:'50px',
        height:'50px',
        opacity:'50%',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        cursor:'pointer'
    }
    console.log(sliderRef)

    return (
        <Box>
            <Container 
            maxWidth='lg'
            >
                <Box>
                    <Typography
                        fontSize={{
                            xs: '16px',
                            sm: '20px',
                            md: '25px'
                        }}
                        sx={{

                            textAlign: 'center',
                            margin: '30px 0',
                            fontWeight: 'bold'
                        }}
                        variant='h4'
                        contents='h4'
                    >
                        Our Professionals Work
                    </Typography>
                </Box>
                <Box
                    sx={{ position: 'relative' }}
                >
                   {
                    !isMatch &&  <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        translate: '-50% -50%',
                        width: '102%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        zIndex:'33',
                        
                    }}
                >
                    <Box
                    sx={arrowBtn}
                    onClick={()=>sliderRef?.current?.slickNext()}
                    >
                        <ArrowBackIosIcon 
                     sx={{marginLeft:'9px'}}
                        />
                    </Box>
                    <Box
                       sx={arrowBtn}
                       onClick={()=>sliderRef?.current?.slickPrev()}
                    >
                        <ArrowForwardIosIcon />
                    </Box>
                </Box>
                   }
                    <Slider {...settings} ref={sliderRef}>
                        {
                            workData?.carousel?.map((img, index) => <Box>
                                <img
                                    key={index}
                                    className={`${classes.carouselImg} img`} src={img} alt="" />
                            </Box>)
                        }
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default Work;