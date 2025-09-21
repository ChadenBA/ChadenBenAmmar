import React, { useState } from 'react';
import { Box, Typography, Stack, useTheme } from '@mui/material';
import ProjectCard from './ProjectCard';
import ProjectStepper from './ProjectStepper';
import { projects } from '@/data/projects';

const FeaturedProjects = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        backgroundColor: isDark ? '#0c1123' : '#ffffff',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color={isDark ? '#8b5cf6' : '#5b21b6'}
        mb={2}
      >
        Featured Projects
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          color: isDark ? '#ffffff' : '#000000',
          mb: 4,
        }}
      >
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
