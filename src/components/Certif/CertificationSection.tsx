import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { certifications } from "@/data/CertificationData";
import CertificationCard from "./CertificationCard";
import CertificationStepper from "./CertificationStepper";

const ITEMS_PER_PAGE = 6;

const CertificationSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const pageCount = Math.ceil(certifications.length / ITEMS_PER_PAGE);
  const paginatedCertifications = certifications.slice(
    activeStep * ITEMS_PER_PAGE,
    activeStep * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: "#0c1123" }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="#8b5cf6"
        mb={2}
      >
        Certifications
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        mb={4}
      >
        Professional certifications and continuous learning achievements
      </Typography>

      {/* Stepper with number of pages */}
      <CertificationStepper
        steps={Array.from({ length: pageCount }, (_, i) => `Page ${i + 1}`)}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />

      {/* Grid of 6 certifications */}
      <Grid container spacing={4} justifyContent="center">
        {paginatedCertifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CertificationCard {...cert} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CertificationSection;
