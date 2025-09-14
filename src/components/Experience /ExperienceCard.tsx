import React from "react";
import { Box, Typography, Chip, Stack, Paper } from "@mui/material";

interface ExperienceCardProps {
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  type,
  duration,
  location,
  description,
  technologies
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 3,
        backgroundColor: "#0c1123",
        color: "white"
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        {role}
      </Typography>
      <Typography color="#8b5cf6" fontWeight="500">
        {company} · {type}
      </Typography>

      <Stack direction="row" spacing={2} mt={1} mb={2}>
        <Chip label={duration} color="secondary" />
        <Chip label={location} variant="outlined" sx={{ color: "white", borderColor: "#8b5cf6" }} />
      </Stack>

      <Box mb={2}>
        {description.map((line, index) => (
          <Typography key={index} variant="body2" sx={{ mb: 1 }}>
            • {line}
          </Typography>
        ))}
      </Box>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        {technologies.map((tech, index) => (
          <Chip key={index} label={tech} sx={{ backgroundColor: "#1e293b", color: "#8b5cf6" }} />
        ))}
      </Stack>
    </Paper>
  );
};

export default ExperienceCard;
