import React from "react";
import { Card, CardContent, Typography, Chip, Stack, useTheme } from "@mui/material";

interface EducationProps {
  institution: string;
  degree: string;
  period: string;
  location: string;
  skills: string[];
}

const EducationCard: React.FC<EducationProps & { description?: string }> = ({
    institution,
    degree,
    period,
    location,
    skills,
    description
  }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    return (
      <Card
        sx={{
          backgroundColor:  isDark ? "#0c1123" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
          borderRadius: "16px",
          boxShadow: 4,
          height: "100%",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {institution}
          </Typography>
          <Typography variant="subtitle1" color="#8b5cf6" gutterBottom>
            {degree}
          </Typography>
          <Typography variant="body2" color="gray">
            {period} | {location}
          </Typography>
  
          {description && (
            <Typography variant="body2" mt={2} gutterBottom>
              {description}
            </Typography>
          )}
  
          <Typography variant="subtitle2" mt={2} gutterBottom>
            Skills gained:
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                sx={{ backgroundColor:  " dark: #2d3748", color: " dark: white" }}
                size="small"
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    );
  };
  

export default EducationCard;
