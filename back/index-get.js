'use strict'
/* eslint-env node, es6 */

const { readFile } = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)

const READ_OPTIONS = { encoding: 'UTF-8' }
const INDEX_URL = 'C:/Esimed/SPORTIFY/Code/Projet/front/html/login.html'

module.exports = async() => {
// Recuperer le contenu du fichier login.html
const contenu = await readFileAsync(INDEX_URL, READ_OPTIONS)

// Retourner login.html
return contenu
}