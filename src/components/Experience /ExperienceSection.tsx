import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { experiences } from "@/data/ExperienceData";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
   const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: isDark ? "#0c1123" : "#ffffff" }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="#8b5cf6"
        mb={2}
      >
        Experience
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        mb={4}
      >
        My professional journey and key contributions
      </Typography>

      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </Box>
  );
};

export default ExperienceSection;
