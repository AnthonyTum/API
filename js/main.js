const createAttribute = (label, value) => {
    const attribute = document.createElement('tr');

    const attributeLabel = document.createElement('td');
    attributeLabel.textContent = label;

    const attributeValue = document.createElement('td');
    attributeValue.textContent = value;

    attribute.appendChild(attributeLabel);
    attribute.appendChild(attributeValue);

    return attribute;
};

const createPlayerCard = (playerData) => {
    const playerCard = document.createElement('div');
    playerCard.className = 'player-card';

    const playerImage = document.createElement('img');
    playerImage.src = playerData.photo;
    playerImage.style.width = '150px';
    playerCard.appendChild(playerImage);

    const playerName = document.createElement('h2');
    playerName.textContent = playerData.nom;
    playerCard.appendChild(playerName);

    const playerInfoTable = document.createElement('table');

    const playerAge = createAttribute('Âge', playerData.age);
    const playerTaille = createAttribute('Taille', playerData.taille);
    const playerPoids = createAttribute('Poids', playerData.poids);
    const playerNationalite = createAttribute('Nationalité', playerData.nationalite);
    const playerPostes = createAttribute('Postes', playerData.postes.join(', '));

    playerInfoTable.appendChild(playerAge);
    playerInfoTable.appendChild(playerTaille);
    playerInfoTable.appendChild(playerPoids);
    playerInfoTable.appendChild(playerNationalite);
    playerInfoTable.appendChild(playerPostes);

    const technicalAttributes = document.createElement('table');
    technicalAttributes.className = 'attribute-table';
    Object.entries(playerData.technical).forEach(([label, value]) => {
        const attribute = createAttribute(label, value);
        technicalAttributes.appendChild(attribute);
    });

    const mentalAttributes = document.createElement('table');
    mentalAttributes.className = 'attribute-table';
    Object.entries(playerData.mental).forEach(([label, value]) => {
        const attribute = createAttribute(label, value);
        mentalAttributes.appendChild(attribute);
    });

    const physicalAttributes = document.createElement('table');
    physicalAttributes.className = 'attribute-table';
    Object.entries(playerData.physical).forEach(([label, value]) => {
        const attribute = createAttribute(label, value);
        physicalAttributes.appendChild(attribute);
    });

    playerCard.appendChild(playerInfoTable);
    playerCard.appendChild(technicalAttributes);
    playerCard.appendChild(mentalAttributes);
    playerCard.appendChild(physicalAttributes);

    return playerCard;
};

const playersData = [
    {
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
    },
    {
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
    },
    {
        "nom": "Bukayo Saka",
        "age": 20,
        "taille": "1m78",
        "poids": "69kg",
        "nationalite": "Angleterre",
        "postes": ["Ailier droit", "Ailier gauche"],
        "photo": "img/Saka.png",
        "technical": {
            "Centres": 15,
            "Contrôle de Balle": 15,
            "Corners": 13,
            "Coup Francs": 9,
            "Dribbles": 15,
            "Finition": 13,
            "Jeu de Tête": 8,
            "Marquage": 10,
            "Passes": 14,
            "Penalty": 14,
            "Tacles": 10,
            "Technique": 16,
            "Tirs de Loin": 13,
            "Touches Longues": 6
        },
        "mental": {
            "Agressivité": 12,
            "Anticipation": 16,
            "Appels de Balle": 16,
            "Concentration": 14,
            "Courage": 12,
            "Décisions": 16,
            "Détermination": 16,
            "Inspiration": 16,
            "Jeu Collectif": 17,
            "Leadership": 9,
            "Placement": 11,
            "Sang-Froid": 15,
            "Vision du Jeu": 16,
            "Volume de Jeu": 15
        },
        "physical": {
            "Accélération": 16,
            "Agilité": 16,
            "Détente Verticale": 9,
            "Endurance": 16,
            "Équilibre": 17,
            "Puissance": 13,
            "Qualité Physiques Naturelles": 16,
            "Vitesse": 16
        }
    }
];

const playerCardContainer = document.getElementById('player-card');
playersData.forEach(playerData => {
    const playerCard = createPlayerCard(playerData);
    playerCardContainer.appendChild(playerCard);
});
