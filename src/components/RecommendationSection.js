import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const RecommendationSection = ({ model, recommendations }) => {
  return (
    <Box style={{ mb: 4 }}>
      <Typography variant="h5" sx={{mb:2}} >{model}</Typography>
      <Typography paragraph>Les recommandations pour le modèle :{model} sont les suivantes :</Typography>
      <List>
        {recommendations ?
          recommendations.map((recommendation, index) => (
            <ListItem key={index}>
              <ListItemText primary={recommendation} />
            </ListItem>
          ))
          :
          <Typography paragraph>Aucunes recommandations, l'utilisateur n'a pas d'historique</Typography>
        }
      </List>
    </Box>
  );
};

export default RecommendationSection;
