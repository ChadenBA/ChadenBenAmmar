import React from 'react';
import { Chip, useTheme } from '@mui/material';

type Props = {
  label: string;
};


const ProjectTag = ({ label }: Props) => {
     const theme = useTheme();
      const isDark = theme.palette.mode === "dark";
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: isDark ? "#0c1123" : "#ffffff",
        color:  isDark ? "#ffffff" : "#000000",
        fontSize: 12,
        fontWeight: 500,
      }}
    />
  );
};

export default ProjectTag;
