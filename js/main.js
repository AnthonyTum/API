// Fonction pour créer et ajouter un élément HTML avec des attributs
function createElement(tag, attributes, text) {
    const element = document.createElement(tag);
    if (attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

// Fonction pour ajouter un joueur au document
function addPlayerToDocument(player) {
    const playersList = document.getElementById('players-list');
    const playerCard = createElement('div', { class: 'player-card' });
    const playerImage = createElement('img', { src: player.photo, alt: player.nom });
    const playerName = createElement('h2', null, player.nom);
    const attributesSection = createElement('div', { class: 'attributes-section' });

    // Crée les tables pour les attributs techniques, mentaux et physiques
    for (const category in player) {
        if (category !== 'photo' && category !== 'nom') {
            const attributesTable = createElement('div', { class: 'attributes-table' });
            const tableTitle = createElement('h3', null, `Attributs ${category.charAt(0).toUpperCase() + category.slice(1)}`);
            const attributeTable = createElement('table');
            const tableBody = createElement('tbody');

            for (const attribute in player[category]) {
                const attributeRow = createElement('tr');
                const attributeName = createElement('td', null, attribute);
                const attributeValue = createElement('td', null, player[category][attribute]);

                attributeRow.appendChild(attributeName);
                attributeRow.appendChild(attributeValue);
                tableBody.appendChild(attributeRow);
            }

            attributeTable.appendChild(tableBody);
            attributesTable.appendChild(tableTitle);
            attributesTable.appendChild(attributeTable);
            attributesSection.appendChild(attributesTable);
        }
    }

    playerCard.appendChild(playerImage);
    playerCard.appendChild(playerName);
    playerCard.appendChild(attributesSection);
    playersList.appendChild(playerCard);
}

// Fonction pour charger les données des joueurs depuis un fichier JSON
function loadPlayers() {
    fetch('players.json')
        .then(response => response.json())
        .then(data => {
            for (const player of data) {
                addPlayerToDocument(player);
            }
        })
        .catch(error => console.error('Erreur lors du chargement des joueurs :', error));
}

// Charge les données des joueurs lorsque la page est chargée
window.addEventListener('load', loadPlayers);


const backgrounds = ['img/wallpaper-01.jpg', 'img/wallpaper-02.jpg', 'img/wallpaper-05.jpg'];
let currentBackgroundIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

// Appel de la fonction pour changer le fond à un intervalle régulier
setInterval(changeBackground, 5000); // Change toutes les 5 secondes
