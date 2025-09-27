import React, { useState } from 'react';
import { Box, Typography, Stack, IconButton, useTheme } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ProjectCard from './ProjectCard';
import ProjectStepper from './ProjectStepper';
import { projects } from '@/data/projects';

const FeaturedProjects = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % projects.length);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        backgroundColor: isDark ? 'bg-gray-900 ' : '#ffffff',
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
        Showcase of my projects
      </Typography>

      <ProjectStepper
        steps={projects.length}
        activeStep={activeStep}
        onStepChange={handleStepChange}
      />

      <Stack
        spacing={4}
        mt={6}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          onClick={handleBack}
          sx={{
            color: isDark ? '#ffffff' : '#111827',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <ProjectCard {...projects[activeStep]} />

        <IconButton
          onClick={handleNext}
          sx={{
            color: isDark ? '#ffffff' : '#111827',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default FeaturedProjects;
