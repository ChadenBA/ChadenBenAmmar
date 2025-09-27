import React from "react";
import { Box, Typography, Chip, Stack, Paper, useTheme } from "@mui/material";

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
  technologies,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 3,
        maxWidth: 1220,
        width: "100%",
        mx: "auto",
        backgroundColor: isDark ? "#1e293b" : "#e5e7eb",
                color: isDark ? "#ffffff" : "#000000",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px) scale(1.02)",
          boxShadow: isDark
            ? "0 8px 20px rgba(139, 92, 246, 0.4)"
            : "0 8px 20px rgba(124, 58, 237, 0.3)",
        },
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        {role}
      </Typography>

      <Typography
        sx={{
          color: isDark ? "#8b5cf6" : "#7c3aed",
          fontWeight: 500,
        }}
      >
        {company} · {type}
      </Typography>

      <Stack direction="row" spacing={2} mt={1} mb={2}>
        <Chip label={duration} color="secondary" />
        <Chip
          label={location}
          variant="outlined"
          sx={{
            color: isDark ? "#ffffff" : "#000000",
            borderColor: isDark ? "#8b5cf6" : "#7c3aed",
          }}
        />
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
          <Chip
            key={index}
            label={tech}
            sx={{
              backgroundColor: isDark ? "#0c1123" : "#f3f4f6", 
              color: isDark ? "#d1d5db" : "#111827",          
              fontWeight: 500,
            }}
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default ExperienceCard;
