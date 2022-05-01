//Logique router
//On appelle express car celui ci a déjà un système de router implémenté dans le framework

const express = require('express');
const router = express.Router();

//On récupérer une instance du models  posts 

const { Posts } = require('../models');

//Récupérer les informations de notre database

router.get('/', async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts); 
});

//Insérer des informations dans notre database
//On fait une requête post à notre route post, ensuite on récupère les post data du body qui est envoyé dans la requête, ensuite on appelle la fonction sequalize create qui va insérer les données dans notre base mysql et pour finir on renvoi en tant que réponse les mêmes data qu'on a envoyé pour avoir une confirmation visuelle

router.post('/', async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

module.exports = router;