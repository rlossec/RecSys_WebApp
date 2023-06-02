import React from 'react'
import './App.css';
import axios from 'axios';


import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const RecommenderApiUrl = ''
const RecommenderApiCode = ''

const initialUsers = ['5890', '9261', '15275', '681', '852']


function App() {

  const [selectedUser, setSelectedUser] = React.useState(null);
  const [recommendations, setRecommendations] = React.useState(null);
  const [usersList, setUsersList] = React.useState(initialUsers)

  const getRecommendations = async () => {
    try {
      console.log("Getting recommendations...");
      const {
        data: { id: selectedUser, articles: recommendations },
      } = await axios.get(
        RecommenderApiUrl +
          selectedUser.toString(),
        {
          params: {
            code: RecommenderApiCode,
          },
        }
      );
      setRecommendations(recommendations);
    } catch (error) {
      console.log(error);
      setRecommendations([]);
    }
  };

  const reset = async () => {
    setSelectedUser(null);
    setRecommendations(null);
  };


  return (
    <Paper style={{ padding: 16 }}>
      {recommendations ? (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Recommendations</Typography>
          </Grid>
          <Grid item xs={12}>
            {recommendations.length > 0 ? (
              <List>
                {recommendations.map((key) => (
                  <ListItem key={key}>
                    <ListItemText primary={`Article #${key}`} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="subtitle1" color="error">No recommendations</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={reset}>Reset</Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
           <FormControl style={{ minWidth: 120 }}>
            <InputLabel>User ID</InputLabel>
            <Select value={selectedUser} onChange={(event) => setSelectedUser(event.target.value)}>
              {usersList.map((user) => (
                <MenuItem key={user} value={user}>{user}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={getRecommendations} disabled={!selectedUser}>
            Get recommendations
          </Button>
        </Grid>
      )}
    </Paper>
  );
}

export default App;
