import React from "react";
import { Paper, Typography, Chip, Stack, Button, useTheme } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface CertificationCardProps {
  title: string;
  organization: string;
  issued: string;
  expires?: string | null;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  organization,
  issued,
  expires,
  credentialId,
  credentialUrl,
  skills,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 3 }, 
        borderRadius: 3,
        backgroundColor: isDark ? "#1e293b" : "#e5e7eb",
        color: isDark ? "#ffffff" : "#000000",
        width: "100%", 
        height: "100%",
        overflowY: "auto",
        mx: "auto",
        transition: "all 0.3s ease",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: isDark ? "#8b5cf6" : "#7c3aed",
          fontWeight: 500,
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
      >
        {organization}
      </Typography>

      <Typography variant="body2" mt={2}>
        <strong>Issued:</strong> {issued}
      </Typography>
      {expires && (
        <Typography variant="body2">
          <strong>Expires:</strong> {expires}
        </Typography>
      )}
      {credentialId && (
        <Typography variant="body2">ID: {credentialId}</Typography>
      )}

      {skills.length > 0 && (
        <>
          <Typography variant="subtitle2" mt={2} mb={1}>
            Skills:
          </Typography>
          <Stack direction="row" gap={1} flexWrap="wrap">
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
        </>
      )}

      {credentialUrl && (
        <Button
          variant="outlined"
          endIcon={<OpenInNewIcon />}
          href={credentialUrl}
          target="_blank"
          sx={{
            mt: 2,
            borderColor: isDark ? "#8b5cf6" : "#7c3aed",
            color: isDark ? "#8b5cf6" : "#7c3aed",
            "&:hover": {
              borderColor: isDark ? "#7c3aed" : "#5b21b6",
              color: isDark ? "#7c3aed" : "#5b21b6",
            },
            fontSize: { xs: "0.75rem", sm: "0.9rem" },
            transition: "all 0.3s ease",
          }}
        >
          View Credential
        </Button>
      )}
    </Paper>
  );
};

export default CertificationCard;
