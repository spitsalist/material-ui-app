import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box } from '@mui/material';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Material UI App</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>Welcome to My Material UI App</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Open Dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

export default App;