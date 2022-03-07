import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={'span'} variant={'body2'}>How books will be delivered?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'} variant={'body2'}>
            You have to collect books from my house(Prayagraj U.P.). Only on weekends(Saturday or Sunday).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography component={'span'} variant={'body2'}>Do I have to pay something?</Typography>
        </AccordionSummary>
        <AccordionDetails>            
          <Typography component={'span'} variant={'body2'}>
            <div className="accordionimg">
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography component={'span'} variant={'body2'}>What will be the mode of communication?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'} variant={'body2'}>
            Initially mail and then I'll contact you on phone.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}