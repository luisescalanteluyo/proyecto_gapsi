import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box mt={4}>
      <Divider sx={{ mb: 1 }} />
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', textAlign: 'right' }}
      >
        versión 0.0.1
      </Typography>
    </Box>
  );
};

export default Footer;
