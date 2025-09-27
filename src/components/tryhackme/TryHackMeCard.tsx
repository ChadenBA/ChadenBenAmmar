import React from "react";
import { CardContent, Typography, Box, Grid, useTheme, Paper,keyframes } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import StarsIcon from '@mui/icons-material/Stars';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import StarIcon from '@mui/icons-material/Star';
import WhatshotIcon from '@mui/icons-material/Whatshot';


interface THMStatsProps {
  profileBadge: string;
  totalRooms: number;
  globalRank: string;
  rankPercent: string;
  totalBadges: number;
  totalPaths: number;
  points: number;
  streak: number;
}
// Floating animation for the badge
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// Optional subtle bounce for the text
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
  60% { transform: translateY(-3px); }
`;
const statIcons = [
  <RoomPreferencesIcon sx={{ fontSize: 28, color: "#8b5cf6" }} />,
  <EmojiEventsIcon sx={{ fontSize: 28, color: "#8b5cf6" }} />,
  <StarsIcon sx={{ fontSize: 28, color: "#8b5cf6" }} />,
  <SchoolIcon sx={{ fontSize: 28, color: "#8b5cf6" }} />,
  <StarIcon sx={{ fontSize: 28, color: "#8b5cf6" }} />,
  <WhatshotIcon sx={{ fontSize: 28, color: "#8b5cf6" }} />,
];

const TryHackMeCard: React.FC<THMStatsProps> = ({
  profileBadge,
  totalRooms,
  globalRank,
  rankPercent,
  totalBadges,
  totalPaths,
  points,
  streak,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const stats = [
    { label: "Total Rooms Completed", value: totalRooms },
    { label: "Global Rank", value: rankPercent, sub: globalRank },
    { label: "Total Badges Earned", value: totalBadges },
    { label: "Total Paths Completed", value: totalPaths },
    { label: "Points Earned", value: points },
    { label: "Streak", value: `${streak} days` },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: isDark ? "#0f172a" : "#e5e7eb",
        color: isDark ? "#ffffff" : "#000000",
        borderRadius: 4,
        p: 3,
        
      }}
    >
      <CardContent>
        {/* Badge */}
 
       



  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 3,
      p: 4,
    }}
  >
  
    <Box
      sx={{
        animation: `${float} 3s ease-in-out infinite`,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=5104093"
        style={{ border: "none", width: "400px", height: "120px", display: "block" }}
        title="TryHackMe Badge"
      ></iframe>
    </Box>
  </Box>




        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: isDark ? "#1e293b" : "#f3f4f6",
                  boxShadow: isDark
                    ? "0 6px 20px rgba(0,0,0,0.5)"
                    : "0 6px 20px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px) scale(1.02)",
          boxShadow: isDark
            ? "0 8px 20px rgba(139, 92, 246, 0.4)"
            : "0 8px 20px rgba(124, 58, 237, 0.3)",
        },
                }}
              >
                {/* Icon */}
                {statIcons[index]}
                {/* Label */}
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                >
                  {stat.label}
                </Typography>
                {/* Value */}
                <Typography
                  variant="h5"
                  sx={{ color: "#8b5cf6", fontWeight: "bold" }}
                >
                  {stat.value}
                </Typography>
                {/* Subtext */}
                {stat.sub && (
                  <Typography variant="body2" sx={{ mt: 0.5, color: isDark ? "#cbd5e1" : "#475569" }}>
                    {stat.sub}
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Paper>
  );
};

export default TryHackMeCard;
