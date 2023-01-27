'use strict'
/* eslint-env node, es6 */

// Importe le paquet express
const express = require('express')

const PORT = 6300

// Créer une application express
const app = express()

// Importer la logique de la page d'acceuil
const genererPageAccueil = require('./index-get.js')

// Ecoute de la méthode get et de la route '/'
app.get('/', async(req, res) => {
    //res.send('Hello World !')
    const indexHtml = await genererPageAccueil()

    res.send(indexHtml)
})

// Démarrer le serveur et écouter un port donné
app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
})