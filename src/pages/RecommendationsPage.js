import React from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import RecommendationSection from '../components/RecommendationSection';
import AppBar from '../components/AppBar';

const apiUrl = "https://ia-projet9-az-funct.azurewebsites.net/"

const RecommendationsPage = () => {

  const [userId, setUserId] = React.useState('');
  const [userHistory, setUserHistory] = React.useState([]);
  const [popularityRecommendations, setPopularityRecommendations] = React.useState([]);
  const [contentBasedRecommendations, setContentBasedRecommendations] = React.useState([]);
  const [collaborativeFilteringRecommendations, setCollaborativeFilteringRecommendations] = React.useState([]);

  const handleUserChange = (newUserId) => {
    setUserId(newUserId);
  };

  React.useEffect(() => {
    // Récupération du user_id depuis le local storage
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  React.useEffect(() => {
    if (userId) {
      // Appel à l'API pour récupérer les recommandations de popularité
      fetch(apiUrl + `api/recommendations?model=popularity&user_id=${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUserHistory(data.user_history)
          setPopularityRecommendations(data.recommended_items)
        }).catch((error) => console.error('Erreur lors de la récupération des recommandations de popularité:', error));

      // Appel à l'API pour récupérer les recommandations basées sur le contenu
      fetch(apiUrl + `api/recommendations?model=content-based&user_id=${userId}`)
        .then((response) => response.json())
        .then((data) => setContentBasedRecommendations(data.recommended_items)) //
        .catch((error) => console.error('Erreur lors de la récupération des recommandations basées sur le contenu:', error));

      // Appel à l'API pour récupérer les recommandations de filtrage collaboratif
      fetch(apiUrl + `api/recommendations?model=collaborative-filtering&user_id=${userId}`)
        .then((response) => response.json())
        .then((data) => setCollaborativeFilteringRecommendations(data.recommended_items))
        .catch((error) => console.error('Erreur lors de la récupération des recommandations de filtrage collaboratif:', error));
    }
  }, [userId]);

  return (
    <>
      <AppBar onUserChange={handleUserChange} />
      <Container maxWidth="xl">
        {userId ?
          <>
            {userHistory &&
              <Paper elevation={3} sx={{p:2, m:2}}>
                <Box style={{ mb: 4 }}>
                  <Typography variant="h5" sx={{mb:2}} >Articles consultés</Typography>
                  <Typography paragraph>Les articles déjà consultés sont :</Typography>
                  <List>
                    {userHistory.map((article_id, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={article_id} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Paper>
            }
            <Paper elevation={3} sx={{p:2, m:2}}>
              <RecommendationSection model="Popularité" recommendations={popularityRecommendations} />
            </Paper>
            <Paper elevation={3} sx={{p:2, m:2}}>
              <RecommendationSection model="Content Based" recommendations={contentBasedRecommendations} />
            </Paper>
            <Paper elevation={3} sx={{p:2, m:2}}>
              <RecommendationSection model="Filtrage Collaboratif" recommendations={collaborativeFilteringRecommendations} />
            </Paper>
          </>
        :
          <Paper elevation={3} sx={{p:2, m:2}}>
            <Typography variant="h6" align="center">
              Veuillez renseigner un utilisateur.
            </Typography>
          </Paper>
        }
      </Container>
    </>
  );
};

export default RecommendationsPage;