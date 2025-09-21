import React from "react";
import { Box, Typography, Stack , useTheme } from "@mui/material";
import { education } from "@/data/EducationData";
import EducationCard from "./EducationCard";

const EducationSection = () => {
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
        Education
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        mb={4}
      >
        Academic journey and key skills gained
      </Typography>

      {/* Flex row of cards */}
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        sx={{ flexWrap: "nowrap", overflowX: "auto" }}
      >
        {education.map((edu, index) => (
          <Box key={index} sx={{ minWidth: 300, flex: "1 0 300px" }}>
            <EducationCard {...edu} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default EducationSection;
