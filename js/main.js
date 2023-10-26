const endrickData = {
    "nom": "Endrick",
    "age": 15,
    "taille": "1m73",
    "poids": "61kg",
    "nationalite": "Brésil",
    "postes": ["Buteur", "Ailier droit"],
    "photo": "img/Endrick.png", // URL de l'image du joueur

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

function createElementWithText(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

function createAttributesList(attributes) {
    const list = document.createElement('ul');
    for (const attribute in attributes) {
        const listItem = document.createElement('li');
        listItem.textContent = `${attribute}: ${attributes[attribute]}`;
        list.appendChild(listItem);
    }
    return list;
}

function displayEndrick() {
    const playerCard = document.getElementById('player-card');
    
    // Affichage de la photo du joueur
    const playerImage = playerCard.querySelector('img');
    playerImage.src = endrickData.photo;

    // Ajout des attributs techniques
    const technicalAttributes = document.getElementById('technical-attributes');
    technicalAttributes.appendChild(createAttributesList(endrickData.technical));

    // Ajout des attributs mentaux
    const mentalAttributes = document.getElementById('mental-attributes');
    mentalAttributes.appendChild(createAttributesList(endrickData.mental));

    // Ajout des attributs physiques
    const physicalAttributes = document.getElementById('physical-attributes');
    physicalAttributes.appendChild(createAttributesList(endrickData.physical));
}

displayEndrick();