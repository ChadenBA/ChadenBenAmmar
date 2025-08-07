import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ProjectCard from './ProjectCard';
import ProjectStepper from './ProjectStepper';
import { projects } from '@/data/projects';

const FeaturedProjects = () => {
  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: '#0c1123' }}>
      <Typography variant="h4" align="center" fontWeight="bold" color="#8b5cf6" mb={2}>
        Featured Projects
      </Typography>
      <Typography variant="subtitle1" align="center" color="white" mb={4}>
        Showcase of my most impactful and innovative projects
      </Typography>
      <ProjectStepper />
      <Stack spacing={4} mt={4} alignItems="center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Stack>
    </Box>
  );
};

export default FeaturedProjects;
