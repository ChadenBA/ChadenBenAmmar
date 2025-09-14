import React from "react";
import { Paper, Typography, Chip, Stack, Button } from "@mui/material";
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
  skills
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: "#0c1123",
        color: "white",
        maxWidth: 600,
        mx: "auto"
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography color="#8b5cf6" fontWeight="500">
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
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                sx={{ backgroundColor: "#1e293b", color: "#8b5cf6" }}
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
            borderColor: "#8b5cf6",
            color: "#8b5cf6",
            "&:hover": {
              borderColor: "#7c3aed",
              color: "#7c3aed"
            }
          }}
        >
          View Credential
        </Button>
      )}
    </Paper>
  );
};

export default CertificationCard;
