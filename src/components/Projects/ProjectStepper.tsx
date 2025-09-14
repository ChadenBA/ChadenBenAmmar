import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

interface ProjectStepperProps {
  steps: number;
  activeStep: number;
  onStepChange: (step: number) => void;
}

const ProjectStepper: React.FC<ProjectStepperProps> = ({ steps, activeStep, onStepChange }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Stepper activeStep={activeStep}>
        {Array.from({ length: steps }).map((_, index) => (
          <Step key={index} onClick={() => onStepChange(index)}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default ProjectStepper;
