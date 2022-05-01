//Initialisation de express

const express = require('express');
const app = express();

//Initialisation de cors pour "whitelister" notre ordinateur, pour permettre de recevoir des infos de la même origine

const cors = require('cors');
app.use(cors());

//On appelle express.json pour pouvoir récupérer les infos envoyer en json

app.use(express.json());

//On récupère tous les models

const db = require('./models');

//Routers

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

//Initialisation de sequelize qui va analyser tous nos models et créer les tables avant d'allumer le server
//Démarrage du serveur

db.sequelize.sync().then(() => {
    app.listen(3001, (req, res) => {
        console.log("Serveur démarré sur le port 3001");
    });
});