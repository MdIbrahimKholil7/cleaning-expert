import React, { useState } from 'react';
/* import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css"; */
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/styles';

const useStyles=makeStyles({
    carouselImg:{
        height:'200px',
        width:'auto',
        margin:'0 20px'
    }
})


const Work = () => {
    const [workData, setWorkData] = useState([])
    const classes=useStyles()
    const settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: 8,
        centerMode: true,
        speed: 1000,
        slidesToScroll: 3,
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

    useEffect(()=>{
        fetch('workData.json')
        .then(res=>res.json())
        .then(data=>setWorkData(data[0]))
    },[])


    return (
        <Box>
            <Box>
                <Typography
                fontSize={{
                    xs:'16px',
                    sm: '20px',
                    md:'25px'
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
            <Box>
                <Slider {...settings}>
                    {
                        workData?.carousel?.map((img,index)=><Box>
                            <img 
                            key={index}
                            className={`${classes.carouselImg} img`} src={img} alt="" />
                        </Box>)
                    }
                </Slider>
            </Box>
        </Box>
    );
};

export default Work;