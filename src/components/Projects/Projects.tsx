import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ProjectCard from './ProjectCard';
import ProjectStepper from './ProjectStepper';
import { projects } from '@/data/projects';

const FeaturedProjects = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: '#0c1123' }}>
      <Typography variant="h4" align="center" fontWeight="bold" color="#8b5cf6" mb={2}>
        Featured Projects
      </Typography>
      <Typography variant="subtitle1" align="center" color="white" mb={4}>
        Showcase of my most impactful and innovative projects
      </Typography>

      {/* Stepper */}
      <ProjectStepper
        steps={projects.length}
        activeStep={activeStep}
        onStepChange={handleStepChange}
      />

      <Stack spacing={4} mt={4} alignItems="center">
        <ProjectCard {...projects[activeStep]} />
      </Stack>
    </Box>
  );
};

export default FeaturedProjects;
