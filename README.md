# Web App for Recommander System

## Introduction
Ce repository fait partie d'un projet de Système de recommandation et contient l'application web.
Elle est développée en React et affiche les recommandations de contenu.   
L'application est déployée sur Azure à l'aide d'un container Docker.

## Structure 
- `src/` : Contient le code source de l'application React.
- `public/` : Contient les fichiers statiques.
- `Dockerfile` : Contient les instructions pour construire l'image Docker.

## Installation
Clonez ce repository et installez les dépendances :
```bash
git clone https://github.com/votre-utilisateur/RecSys-WebApp.git
cd RecSys-WebApp
npm install
```

Puis

```bash
npm start
```

Lance l'application en mode développement.  
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.

La page se rechargera lorsque vous ferez des modifications.  
Vous pouvez également voir les erreurs de lint dans la console.

## Déploiement

```bash
npm run build
```

Construit l'application pour la production dans le dossier build.
Il regroupe correctement React en mode production et optimise la construction pour de meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages.
Votre application est prête à être déployée !

## Tests

```bash
npm test
```

Lance les tests.

# Web App for Recommender System

## Introduction
This repository is part of a Recommender System project and contains the web application.
It is developed in React and displays content recommendations.   
The application is deployed on Azure using a Docker container.

## Structure 
- `src/` : Contains the React application source code.
- `public/` : Contains the static files.
- `Dockerfile` : Contains the instructions to build the Docker image.
- `azure-pipelines.yml` : Contains the configuration for CI/CD deployment on Azure.

## Installation
Clone this repository and install the dependencies:
```bash
git clone https://github.com/your-username/RecSys-WebApp.git
cd RecSys-WebApp
npm install
```
Then
```bash
npm start
```

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

## Deployment

```bash
npm run build
```

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

## Tests

```bash
npm test
```

Launches the test runner in the interactive watch mode.
