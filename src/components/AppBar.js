import React, { useState } from 'react';

import { AppBar as MuiAppBar} from '@mui/material'
import Toolbar from '@mui/material/Toolbar';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const AppBar = ({onUserChange}) => {
  const [userId, setUserId] = useState('');

  const handleUserChange = () => {
    // Stockage de l'`user_id` en local storage
    localStorage.setItem('user_id', userId);
    onUserChange(userId);
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <MuiAppBar position="static">
      <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h6">My Content - Recommendation</Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: 'center'}}>
          <TextField
            label="Your user ID"
            value={userId}
            onChange={handleUserIdChange}
            sx={{ m: 2, backgroundColor: 'white'}}
          />
          <Box>
            <Button variant="contained" color="success" onClick={handleUserChange} sx={{ m: 2 }}>
              Valider
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;