const endrickData = {
    "nom": "Endrick",
    "age": 15,
    "taille": "1m73",
    "poids": "61kg",
    "nationalite": "Brésil",
    "postes": ["Buteur", "Ailier droit"],
    "photo": "img/Endrick.png",

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
    const playerCard = document.getElementById('player-card2');
    
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

const musialaData = {
    "nom": "Jamal Musiala",
    "age": 19,
    "taille": "1m83",
    "poids": "70kg",
    "nationalite": "Allemagne",
    "postes": ["Ailier gauche", "Milieu Offensif Centre"],
    "photo": "img/Musiala.png",

    "technical": {
        "Centres": 9,
        "Contrôle de Balle": 16,
        "Corners": 6,
        "Coup Francs": 6,
        "Dribbles": 19,
        "Finition": 13,
        "Jeu de Tête": 8,
        "Marquage": 10,
        "Passes": 15,
        "Penalty": 12,
        "Tacles": 12,
        "Technique": 18,
        "Tirs de Loin": 13,
        "Touches Longues": 6
    },
    
    "mental": {
        "Agressivité": 12,
        "Anticipation": 14,
        "Appels de Balle": 15,
        "Concentration": 12,
        "Courage": 12,
        "Décisions": 14,
        "Détermination": 17,
        "Inspiration": 18,
        "Jeu Collectif": 14,
        "Leadership": 6,
        "Placement": 10,
        "Sang-Froid": 14,
        "Vision du Jeu": 15,
        "Volume de Jeu": 15
    },
    
    "physical": {
        "Accélération": 15,
        "Agilité": 17,
        "Détente Verticale": 10,
        "Endurance": 12,
        "Équilibre": 16,
        "Puissance": 10,
        "Qualité Physiques Naturelles": 16,
        "Vitesse": 15
    }
};

function displayMusiala() {
    const playerCard = document.getElementById('player-card2');
    
    // Affichage de la photo du joueur
    const playerImage = playerCard.querySelector('img');
    playerImage.src = musialaData.photo;

    // Ajout des attributs techniques
    const technicalAttributes = document.getElementById('technical-attributes');
    technicalAttributes.appendChild(createAttributesList(musialaData.technical));

    // Ajout des attributs mentaux
    const mentalAttributes = document.getElementById('mental-attributes');
    mentalAttributes.appendChild(createAttributesList(musialaData.mental));

    // Ajout des attributs physiques
    const physicalAttributes = document.getElementById('physical-attributes');
    physicalAttributes.appendChild(createAttributesList(musialaData.physical));
}

displayMusiala();