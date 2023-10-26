document.addEventListener("DOMContentLoaded", function () {
    const playersContainer = document.querySelector(".players");

    fetch("json/players.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(playerData => {
                const playerCard = document.createElement("div");
                playerCard.className = "player-card";

                const playerImage = document.createElement("img");
                playerImage.src = playerData.photo;
                playerImage.alt = playerData.nom;

                const playerName = document.createElement("h2");
                playerName.textContent = playerData.nom;

                const attributesSection = document.createElement("div");
                attributesSection.className = "attributes-section";

                const technicalTable = createAttributeTable("Attributs Techniques", playerData.technical);
                const mentalTable = createAttributeTable("Attributs Mentaux", playerData.mental);
                const physicalTable = createAttributeTable("Attributs Physiques", playerData.physical);

                attributesSection.appendChild(technicalTable);
                attributesSection.appendChild(mentalTable);
                attributesSection.appendChild(physicalTable);

                playerCard.appendChild(playerImage);
                playerCard.appendChild(playerName);
                playerCard.appendChild(attributesSection);

                playersContainer.appendChild(playerCard);
            });
        });

    function createAttributeTable(title, attributes) {
        const table = document.createElement("table");
        const tableCaption = document.createElement("caption");
        tableCaption.textContent = title;
        table.appendChild(tableCaption);

        for (const attributeName in attributes) {
            const row = document.createElement("tr");

            const attributeLabel = document.createElement("td");
            attributeLabel.textContent = attributeName;

            const attributeValue = document.createElement("td");
            attributeValue.textContent = attributes[attributeName];

            row.appendChild(attributeLabel);
            row.appendChild(attributeValue);
            table.appendChild(row);
        }

        return table;
    }
});

const backgrounds = ['img/wallpaper-01.jpg', 'img/wallpaper-02.jpg', 'img/wallpaper-05.jpg'];
let currentBackgroundIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

// Appel de la fonction pour changer le fond à un intervalle régulier
setInterval(changeBackground, 5000); // Change toutes les 5 secondes
