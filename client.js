const readlineSync = require('readline-sync');

// Demander les informations de connexion
const login = readlineSync.question('Login ? ');
const password = readlineSync.question('Mot de passe ? ', {
  hideEchoBack: true // Cache le mot de passe à l'affichage
});

// Envoyer les informations au serveur
async function loginUser() {
    try {
        const response = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, password })
        });

        const result = await response.json();

        if (result.success) {
            console.log('Connexion réussie. Données :', result.data);
        } else {
            console.log('Erreur:', result.message);
        }
    } catch (error) {
        console.error('Erreur de connexion au serveur:', error);
    }
}

loginUser();
