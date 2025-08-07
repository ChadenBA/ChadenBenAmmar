import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

const ProjectStepper = () => {
  const steps = ['1', '2', '3'];
  const activeStep = 1;

  return (
    <Box display="flex" justifyContent="center">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default ProjectStepper;
