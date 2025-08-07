import React from 'react';
import { Chip } from '@mui/material';

type Props = {
  label: string;
};

const ProjectTag = ({ label }: Props) => {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: '#333',
        color: 'white',
        fontSize: 12,
        fontWeight: 500,
      }}
    />
  );
};

export default ProjectTag;
