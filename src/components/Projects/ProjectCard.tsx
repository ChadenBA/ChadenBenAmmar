import React from 'react';
import { Box, Typography, Stack, Button, Link , useTheme} from '@mui/material';
import { Project } from '@/types/project';
import ProjectTag from './ProjectTag';

const ProjectCard = ({
  title,
  date,
  tags,
  purpose,
  description,
  features,
  github,
  demo,
}: Project) => {
     const theme = useTheme();
      const isDark = theme.palette.mode === "dark";
  return (
    <Box
      sx={{
        backgroundColor:  isDark ? "#0c1123" : "#ffffff",
        borderRadius: 4,
        padding: 4,
        maxWidth: 900,
        width: '100%',
        color: isDark ? "#ffffff" : "#000000",
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="gray" gutterBottom>
        {date}
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
        {tags.map((tag, idx) => (
          <ProjectTag key={idx} label={tag} />
        ))}
      </Stack>

      <Typography fontWeight="bold" gutterBottom>
        📘 Purpose
      </Typography>
      <Typography mb={2}>{purpose}</Typography>

      <Typography fontWeight="bold" gutterBottom>
        🧾 Description
      </Typography>
      <Typography mb={2}>{description}</Typography>

      <Typography fontWeight="bold" gutterBottom>
        ⚡ Key Features
      </Typography>
      <Stack spacing={1} mb={2}>
        {features.map((f, idx) => (
          <Typography key={idx}>• {f}</Typography>
        ))}
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button component={Link} href={github} target="_blank" variant="outlined" color="inherit">
          GitHub
        </Button>
        <Button component={Link} href={demo} target="_blank" variant="contained" color="secondary">
          Live Demo
        </Button>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
