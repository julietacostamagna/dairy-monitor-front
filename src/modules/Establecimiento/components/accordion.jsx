import React, { useState, Suspense } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage({ title, body: BodyComponent, ...props }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='mt-3'>
      <Accordion expanded={expanded} onChange={handleChange} className=''>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails className='bg-zinc-100 dark:bg-zinc-900'>
          {expanded && (
            <Suspense fallback={<div>Loading...</div>}>
              <BodyComponent {...props} />
            </Suspense>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
