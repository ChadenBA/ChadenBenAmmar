import React from "react";
import { Box, Typography, Link, useTheme, Stack } from "@mui/material";
import { FaStar } from "react-icons/fa";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: 10,
        borderTop: 1,
        borderColor: isDark ? "grey.800" : "grey.300",
        backgroundColor: isDark ? "#111827" : "white",
        color: isDark ? "#d1d5db" : "#4b5563",
        py: 6,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 3, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 2, md: 0 },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <FaStar style={{ color: "#facc15" }} className="animate-pulse" />
          <Typography fontWeight={600}>⭐ Give this project a star!</Typography>
        </Stack>

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
        >
          ▷ Designed & built by{" "}
          <Link
            href="https://github.com/ChadenBA/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Chaden ben Ammar
          </Link>{" "}
          © {new Date().getFullYear()}
        </Typography>

        <Typography
          variant="body2"
          fontStyle="italic"
          textAlign={{ xs: "center", md: "right" }}
          sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
        >
          Created with ❤️ & sprinkled with ✨
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
