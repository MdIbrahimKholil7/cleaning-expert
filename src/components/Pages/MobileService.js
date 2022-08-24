import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Container } from '@mui/system';
import img1 from '../../assets/service1.png'
import img2 from '../../assets/service2.png'
import img3 from '../../assets/sercvice3.png'
import img4 from '../../assets/service4.png'
import React, { useState } from 'react';
import { Forward10 } from '@mui/icons-material';
import { makeStyles } from '@material-ui/styles';





const useStyles = makeStyles({
    img: {
        width: '40px',
        height: '40px'
    }
})

const MobileService = () => {
    const classes = useStyles()
    const images = [
        {
            serviceName: 'Sofa Deep Cleaning',
            img: img3
        },
        {
            serviceName: 'House Cleaning Services',
            img: img1
        },
        {
            serviceName: 'Bathroom Deep Cleaning',
            img: img2
        },
        {
            serviceName: 'Kitchen Deep Cleaning',
            img: img4
        },
    ]
    const [expanded, setExpanded] = useState(false);

    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

    const serviceBorder = {
        border: '1px solid #E7E7E7',
        borderRadius: "4px"
    }


    return (
        <Box
            padding='10px'
          >
            <Box
              border={serviceBorder}
              padding='12px'
            >
                <Box >
                    <Typography
                        fontSize={
                            {
                                xs: '18px',
                                sm: '17px',
                                md: '18px',

                            }
                        }

                        fontWeight='bold'
                        marginBottom='10px'
                    >
                        Choose Our Services
                    </Typography>
                </Box>
                <Box>
                    {
                        images?.map((faq, index) => <Accordion
                            expanded={expanded === `panel${index + 1}`}
                            onChange={handleChange(`panel${index + 1}`)}
                            sx={{ background: '#F7F7F7' }}

                        >
                            <AccordionSummary
                                expandIcon={<ChevronRightIcon />}
                                aria-controls={`panel${index + 1}bh-content`}
                                id={`panel${index + 1}bh-header`}

                            >

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <img className={classes.img} src={faq.img} alt="" />
                                    <Typography
                                        fontWeight='bold'
                                        color='#000000'
                                        fontSize='16px'
                                    >{faq.serviceName}</Typography>
                                </Box>
                            </AccordionSummary>

                        </Accordion>)
                    }
                </Box>
            </Box>

        </Box>
    );
};

export default MobileService;