import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import { education } from "@/data/EducationData";
import EducationCard from "./EducationCard";

const EducationSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 6 },
        backgroundColor: isDark ? "#0f172a" : "#ffffff", 
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="#8b5cf6"
        mb={2}
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
      >
        Education
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        mb={6}
        sx={{
          color: isDark ? "#d1d5db" : "#374151",
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
      >
        Academic journey and key skills gained
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {education.map((edu, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <EducationCard {...edu} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EducationSection;
