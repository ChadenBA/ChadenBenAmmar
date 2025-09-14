// src/components/TryHackMeSection.tsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { tryHackMeStats } from "@/data/TryHackMeData";
import TryHackMeCard from "./TryHackMeCard";

const TryHackMeSection: React.FC = () => {
  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: "#0c1123" }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="#8b5cf6"
        mb={4}
      >
        TryHackMe Journey
      </Typography>

      <Typography
        variant="body1"
        align="center"
        color="gray"
        mb={6}
      >
        My journey in mastering cybersecurity through hands-on challenges and continuous learning on TryHackMe.
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <TryHackMeCard {...tryHackMeStats} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TryHackMeSection;
