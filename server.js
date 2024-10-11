const bcrypt = require('bcrypt'); // Pour gérer les hashs des mots de passe
const users = require('./users.json'); // Contient les utilisateurs et hash des mots de passe
const data = require('./data.json'); // Données à renvoyer si l'authentification réussit
const http = require('node:http');

const server = http.createServer((req, res) => {
});

server.listen(3000);