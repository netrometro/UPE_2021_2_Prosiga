import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion(props) {
  const {
    titulo = "dummy",
    descricao = "Lorem Ipsum"
  } = props;

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography>
              {titulo}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {descricao}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
