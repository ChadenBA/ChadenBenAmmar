// src/components/TryHackMeCard.tsx
import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

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
  return (
    <Card
      sx={{
        backgroundColor: "#1a1f36",
        color: "white",
        borderRadius: "16px",
        boxShadow: 6,
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          My journey in mastering cybersecurity
        </Typography>
        <Typography variant="body2" gutterBottom>
          Through hands-on challenges and continuous learning on TryHackMe.
        </Typography>

        {/* Badge */}
        <Box sx={{ my: 3, textAlign: "center" }}>
          <img
            src={profileBadge}
            alt="TryHackMe Badge"
            style={{ maxWidth: "220px", borderRadius: "12px" }}
          />
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle2" gutterBottom>
              Total Rooms Completed
            </Typography>
            <Typography variant="h6" color="#8b5cf6">
              {totalRooms}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" gutterBottom>
              Global Rank
            </Typography>
            <Typography variant="h6" color="#8b5cf6">
              {rankPercent}
            </Typography>
            <Typography variant="body2">{globalRank}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" gutterBottom>
              Total Badges Earned
            </Typography>
            <Typography variant="h6" color="#8b5cf6">
              {totalBadges}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" gutterBottom>
              Total Paths Completed
            </Typography>
            <Typography variant="h6" color="#8b5cf6">
              {totalPaths}
            </Typography>
          </Grid>

        

          <Grid item xs={6}>
            <Typography variant="subtitle2" gutterBottom>
              Points Earned
            </Typography>
            <Typography variant="h6" color="#8b5cf6">
              {points}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" gutterBottom>
              Streak
            </Typography>
            <Typography variant="h6" color="#8b5cf6">
              {streak} days
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TryHackMeCard;
