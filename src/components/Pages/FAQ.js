
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import useData from '../hooks/useData';

const FAQ = () => {
    const [workData] = useData()
    const [expanded, setExpanded] = useState(false);

    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <Box sx={{ marginTop: '70px' }}>
            <Container
                maxWidth='1000px'
            >
                <Box>
                    <Typography
                        fontSize={
                            {
                                xs: '13px',
                                sm: '15px',
                                md: '18px',
                                lg: '21px'
                            }
                        }
                        textAlign='center'
                        fontWeight='bold'
                        marginBottom='30px'
                    >
                        FAQ's Before Home Cleaning Services In Delhi
                        NCR
                    </Typography>
                </Box>
                <Box
                    marginBottom='40px'
                >
                    {
                        workData?.faq?.map(( faq, index )=> <Accordion
                            expanded={expanded === `panel${index+1}`}
                            onChange={handleChange(`panel${index+1}`)}
                            sx={{ background: '#F7F7F7',margin:'10px 0' }}

                        >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index+1}bh-content`}
                            id={`panel${index+1}bh-header`}

                        >

                            <Typography
                                fontWeight='bold'
                                color='#000000'
                                fontSize='16px'
                            >{faq?.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            {faq?.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>)
                   }
                </Box>
            </Container>
        </Box>
    );
};

export default FAQ;