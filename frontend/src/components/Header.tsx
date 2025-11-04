import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" sx={{ background: '#424242' }}>
      <Toolbar>
        <Avatar src="https://www.grupointeractum.com/wp-content/uploads/2015/05/GAPSY-e1444332047850.png" alt="Gapsi Logo" sx={{ marginRight: 2 }} />
        <Typography variant="h6">e-Commerce Gapsi</Typography>
      </Toolbar>
    </AppBar>
  );
}