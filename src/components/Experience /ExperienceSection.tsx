import React from "react";
import { Box, Typography } from "@mui/material";
import { experiences } from "@/data/ExperienceData";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: "#0c1123" }}>
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
