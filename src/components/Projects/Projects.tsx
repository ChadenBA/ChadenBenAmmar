import React, { useState } from "react";
import { Box, Typography, Stack, IconButton, useTheme } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ProjectCard from "./ProjectCard";
import ProjectStepper from "./ProjectStepper";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleStepChange = (step: number) => setActiveStep(step);
  const handleNext = () => setActiveStep((prev) => (prev + 1) % projects.length);
  const handleBack = () => setActiveStep((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <Box
      sx={{
        py: { xs: 4, md: 10 },
        px: { xs: 2, md: 6 },
        backgroundColor: isDark ? "#111827" : "#ffffff",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color={isDark ? "#8b5cf6" : "#5b21b6"}
        mb={{ xs: 2, md: 4 }}
      >
        Featured Projects
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          color: isDark ? "#ffffff" : "#000000",
          mb: { xs: 3, md: 5 },
          px: { xs: 2, md: 0 },
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
        spacing={{ xs: 2, md: 4 }}
        mt={{ xs: 4, md: 6 }}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          onClick={handleBack}
          sx={{
            color: isDark ? "#ffffff" : "#111827",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <Box
          sx={{
            width: { xs: "100%", sm: 400, md: 900 }, 
            maxWidth: "100%",
            minHeight: { xs: 300, md: 500 },       
          }}
        >
          <ProjectCard {...projects[activeStep]} />
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            color: isDark ? "#ffffff" : "#111827",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default FeaturedProjects;
