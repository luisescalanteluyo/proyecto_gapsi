// import { Card, CardContent, Typography, Avatar } from '@mui/material';

// export default function WelcomeCard({ message, version }: { message: string; version: string }) {
//   return (
//     <Card sx={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center', padding: '1rem' }}>
//       <Avatar src="/logo.png" sx={{ width: 80, height: 80, margin: '0 auto' }} />
//       <CardContent>
//         <Typography variant="h5">{message}</Typography>
//         <Typography variant="body2" color="text.secondary">Versión: {version}</Typography>
//       </CardContent>
//     </Card>
//   );
// }

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
//import { Candidate } from '../types/candidate';

interface ContentProps {
  message?: string; 
//  version: string
  //candidate: Candidate;
  onContinue: () => void;
}

const WelcomeCard: React.FC<ContentProps> = ({ message, onContinue }) => {
  return (
    <Box textAlign="center" my={4}>
      <Box sx={{ my: 4 }}>
        <img
          src="https://www.grupointeractum.com/wp-content/uploads/2015/05/GAPSY-e1444332047850.png" // Coloca el logo en /public
          alt="Gapsi Logo"
          style={{ width: 80, height: 80 }}
        />
      </Box>

      <Typography variant="h6" sx={{ mb: 3 }}>
        Bienvenido {message}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={onContinue}
        sx={{
          textTransform: 'none',
          fontSize: 16,
          borderRadius: 1,
          px: 4,
        }}
      >
        Continuar
      </Button>
    </Box>
  );
};

export default WelcomeCard;
