import React from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";

interface CertificationStepperProps {
  steps: string[];
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const CertificationStepper: React.FC<CertificationStepperProps> = ({
  steps,
  activeStep,
  setActiveStep
}) => {
  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default CertificationStepper;
