// Fonction pour récupérer les données des joueurs depuis une API
const fetchPlayerData = () => {
    fetch('URL_DE_VOTRE_API') // Remplacez 'URL_DE_VOTRE_API' par l'URL réelle de l'API
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erreur de récupération des données.');
            }
            return response.json();
        })
        .then((data) => {
            // Appel de la fonction pour afficher les joueurs avec les données de l'API
            displayPlayers(data);
        })
        .catch((error) => {
            console.error('Erreur:', error);
        });
};

// Fonction pour afficher les informations générales d'un joueur
const displayGeneralInfo = (player) => {
    const generalInfo = document.createElement('div');
    generalInfo.className = 'general-info';
    generalInfo.innerHTML = `<h3>Informations Générales de ${player.nom}</h3>`;
    generalInfo.innerHTML += `<img src="${player.photo}" alt="${player.nom}" width="200">`;
    generalInfo.innerHTML += `<p>Âge: ${player.age} ans</p>`;
    generalInfo.innerHTML += `<p>Taille: ${player.taille}</p>`;
    generalInfo.innerHTML += `<p>Poids: ${player.poids}</p>`;
    generalInfo.innerHTML += `<p>Nationalité: ${player.nationalite}</p>`;
    generalInfo.innerHTML += `<p>Postes: ${player.postes.join(', ')}</p>`;
    return generalInfo;
};

// Fonction pour afficher les attributs techniques d'un joueur
const displayTechnicalAttributes = (player) => {
    const technicalAttributes = document.createElement('div');
    technicalAttributes.className = 'technical-attributes';
    technicalAttributes.innerHTML = `<h3>Attributs Techniques de ${player.nom}</h3><ul>`;

    const technicalAttrs = [
        'Centres',
        'Contrôle de Balle',
        'Corners',
        'Coups Francs',
        'Dribbles',
        'Finition',
        'Jeu de Tête',
        'Marquage',
        'Passes',
        'Penalty',
        'Tacles',
        'Technique',
        'Tirs de Loin',
        'Touches Longues'
    ];

    for (const attr of technicalAttrs) {
        technicalAttributes.innerHTML += `<li>${attr}: <span>${player.technical[attr]}</span></li>`;
    }

    technicalAttributes.innerHTML += '</ul>';
    return technicalAttributes;
};

// Fonction pour afficher les attributs mentaux d'un joueur
const displayMentalAttributes = (player) => {
    const mentalAttributes = document.createElement('div');
    mentalAttributes.className = 'mental-attributes';
    mentalAttributes.innerHTML = `<h3>Attributs Mentaux de ${player.nom}</h3><ul>`;

    const mentalAttrs = [
        'Agressivité',
        'Anticipation',
        'Appels de Balle',
        'Concentration',
        'Courage',
        'Décisions',
        'Détermination',
        'Inspiration',
        'Jeu Collectif',
        'Leadership',
        'Placement',
        'Sang-froid',
        'Vision du Jeu',
        'Volume de Jeu'
    ];

    for (const attr of mentalAttrs) {
        mentalAttributes.innerHTML += `<li>${attr}: <span>${player.mental[attr]}</span></li>`;
    }

    mentalAttributes.innerHTML += '</ul>';
    return mentalAttributes;
};

// Fonction pour afficher les attributs physiques d'un joueur
const displayPhysicalAttributes = (player) => {
    const physicalAttributes = document.createElement('div');
    physicalAttributes.className = 'physical-attributes';
    physicalAttributes.innerHTML = `<h3>Attributs Physiques de ${player.nom}</h3><ul>`;

    const physicalAttrs = [
        'Accélération',
        'Agilité',
        'Détente Verticale',
        'Endurance',
        'Équilibre',
        'Puissance',
        'Qualité Physiques Naturelles',
        'Vitesse'
    ];

    for (const attr of physicalAttrs) {
        physicalAttributes.innerHTML += `<li>${attr}: <span>${player.physical[attr]}</span></li>`;
    }

    physicalAttributes.innerHTML += '</ul>';
    return physicalAttributes;
};

// Fonction pour afficher les joueurs avec les données de l'API
const displayPlayers = (players) => {
    const app = document.getElementById('app');
    players.forEach((player) => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.appendChild(displayGeneralInfo(player));
        playerCard.appendChild(displayTechnicalAttributes(player));
        playerCard.appendChild(displayMentalAttributes(player));
        playerCard.appendChild(displayPhysicalAttributes(player));
        app.appendChild(playerCard);
    });
};

// Appel de la fonction pour récupérer les données des joueurs depuis l'API
fetchPlayerData();