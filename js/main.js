const endrickData = {
    "nom": "Endrick",
    "age": 15,
    "taille": "1m73",
    "poids": "61kg",
    "nationalite": "Brésil",
    "postes": ["Buteur", "Ailier droit"],
    "photo": "./img/Endrick.png",

    "technical": {
        "Centres": 10,
        "Contrôle de Balle": 13,
        "Corners": 7,
        "Coup Francs": 12,
        "Dribbles": 15,
        "Finition": 13,
        "Jeu de Tête": 9,
        "Marquage": 4,
        "Passes": 11,
        "Penalty": 11,
        "Tacles": 4,
        "Technique": 13,
        "Tirs de Loin": 10,
        "Touches Longues": 2
    },
    
    "mental": {
        "Agressivité": 11,
        "Anticipation": 12,
        "Appels de Balle": 12,
        "Concentration": 11,
        "Courage": 11,
        "Décisions": 12,
        "Détermination": 14,
        "Inspiration": 18,
        "Jeu Collectif": 9,
        "Leadership": 3,
        "Placement": 6,
        "Sang-Froid": 13,
        "Vision du Jeu": 11,
        "Volume de Jeu": 11
    },
    
    "physical": {
        "Accélération": 15,
        "Agilité": 13,
        "Détente Verticale": 6,
        "Endurance": 11,
        "Équilibre": 14,
        "Puissance": 13,
        "Qualité Physiques Naturelles": 14,
        "Vitesse": 13
    }
};

// Fonction pour créer un élément avec du texte
const createElementWithText = (tagName, text) => {
    const element = document.createElement(tagName);
    element.textContent = text;
    return element;
};

// Fonction pour créer une carte de joueur avec photo et attributs
const createPlayerCardWithAttributes = (player) => {
    const playerCard = document.createElement('div');
    playerCard.className = 'player-card';

    // Création de l'élément image
    const playerImage = document.createElement('img');
    playerImage.src = player.photo; // Utilisation de l'URL de l'image du joueur
    playerImage.alt = `${player.nom}`;
    playerCard.appendChild(playerImage);

    // Création des éléments pour les attributs techniques
    const technicalAttributesElement = document.createElement('div');
    technicalAttributesElement.className = 'attributes';

    const technicalAttributesTitle = createElementWithText('h2', 'Attributs Techniques');
    technicalAttributesElement.appendChild(technicalAttributesTitle);

    for (const attribute in endrickData.technical) {
        const attributeElement = document.createElement('p');
        attributeElement.textContent = `${attribute}: ${endrickData.technical[attribute]}`;
        technicalAttributesElement.appendChild(attributeElement);
    }

    playerCard.appendChild(technicalAttributesElement);

    // Création des éléments pour les attributs mentaux
    const mentalAttributesElement = document.createElement('div');
    mentalAttributesElement.className = 'attributes';

    const mentalAttributesTitle = createElementWithText('h2', 'Attributs Mentaux');
    mentalAttributesElement.appendChild(mentalAttributesTitle);

    for (const attribute in endrickData.mental) {
        const attributeElement = document.createElement('p');
        attributeElement.textContent = `${attribute}: ${endrickData.mental[attribute]}`;
        mentalAttributesElement.appendChild(attributeElement);
    }

    playerCard.appendChild(mentalAttributesElement);

    // Création des éléments pour les attributs physiques
    const physicalAttributesElement = document.createElement('div');
    physicalAttributesElement.className = 'attributes';

    const physicalAttributesTitle = createElementWithText('h2', 'Attributs Physiques');
    physicalAttributesElement.appendChild(physicalAttributesTitle);

    for (const attribute in endrickData.physical) {
        const attributeElement = document.createElement('p');
        attributeElement.textContent = `${attribute}: ${endrickData.physical[attribute]}`;
        physicalAttributesElement.appendChild(attributeElement);
    }

    playerCard.appendChild(physicalAttributesElement);

    // Fonction pour afficher le joueur Endrick
    const displayEndrick = () => {
    const app = document.getElementById('app');
    const endrickCard = createPlayerCardWithAttributes(endrickData);
    app.appendChild(endrickCard);
};

// Appel de la fonction pour afficher le joueur Endrick
displayEndrick();
