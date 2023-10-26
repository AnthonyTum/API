document.addEventListener("DOMContentLoaded", function () {
    const playerCardContainer = document.getElementById("player-card-container");

    fetch('players.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(player => {
                const playerCard = createPlayerCard(player);
                playerCardContainer.appendChild(playerCard);
            });
        })
        .catch(error => {
            console.error('Erreur de chargement des données JSON :', error);
        });

    function createPlayerCard(player) {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');

        const playerImage = document.createElement('img');
        playerImage.src = player.photo;
        playerImage.alt = player.nom;
        playerCard.appendChild(playerImage);

        const playerName = document.createElement('h2');
        playerName.textContent = player.nom;
        playerCard.appendChild(playerName);

        const attributesSection = document.createElement('div');
        attributesSection.classList.add('attributes-section');

        const technicalTable = createAttributeTable('Attributs Techniques', player.technical);
        attributesSection.appendChild(technicalTable);

        const mentalTable = createAttributeTable('Attributs Mentaux', player.mental);
        attributesSection.appendChild(mentalTable);

        const physicalTable = createAttributeTable('Attributs Physiques', player.physical);
        attributesSection.appendChild(physicalTable);

        playerCard.appendChild(attributesSection);

        return playerCard;
    }

    function createAttributeTable(title, attributes) {
        const attributesTable = document.createElement('div');
        attributesTable.classList.add('attributes-table');

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        attributesTable.appendChild(titleElement);

        const table = document.createElement('table');

        for (const attribute in attributes) {
            const row = document.createElement('tr');

            const attributeName = document.createElement('td');
            attributeName.textContent = attribute;

            const attributeValue = document.createElement('td');
            attributeValue.textContent = attributes[attribute];

            row.appendChild(attributeName);
            row.appendChild(attributeValue);

            table.appendChild(row);
        }

        attributesTable.appendChild(table);

        return attributesTable;
    }
});

const backgrounds = ['background1.jpg', 'background2.jpg', 'background3.jpg'];
let currentBackgroundIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

// Appel de la fonction pour changer le fond à un intervalle régulier
setInterval(changeBackground, 5000); // Change toutes les 5 secondes
