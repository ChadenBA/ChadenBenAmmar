import React from "react";
import {
  CardContent,
  Typography,
  Chip,
  Stack,
  useTheme,
  Paper,
} from "@mui/material";

interface EducationProps {
  institution: string;
  degree: string;
  period: string;
  location: string;
  skills: string[];
  description?: string;
}

const EducationCard: React.FC<EducationProps> = ({
  institution,
  degree,
  period,
  location,
  skills,
  description,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Paper
    elevation={0}
        sx={{
          backgroundColor: isDark ? "#1e293b" : "#e5e7eb",
    color: isDark ? "#ffffff" : "#000000",
    borderRadius: "16px",
    boxShadow: 4,
    width: "100%",
    height: "100%", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: { xs: 2, sm: 3 },
    overflow: "hidden", 
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px) scale(1.02)",
      boxShadow: isDark
        ? "0 8px 20px rgba(139, 92, 246, 0.4)"
        : "0 8px 20px rgba(124, 58, 237, 0.3)",
          },
        }}
      >
  
  
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
        >
          {institution}
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            color: "#8b5cf6",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          {degree}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "gray", fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
        >
          {period} | {location}
        </Typography>

        {description && (
          <Typography
            variant="body2"
            mt={2}
            gutterBottom
            sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem" } }}
          >
            {description}
          </Typography>
        )}

        <Typography
          variant="subtitle2"
          mt={2}
          gutterBottom
          sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem" } }}
        >
          Skills gained:
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1}>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                backgroundColor: isDark ? "#0c1123" : "#f3f4f6",
                color: isDark ? "#d1d5db" : "#111827",
                fontWeight: 500,
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Paper>
  );
};

export default EducationCard;
