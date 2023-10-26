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

                const playerInfo = document.createElement("p");

                // Créer les éléments pour les informations du joueur
                const ageLabel = document.createElement("strong");
                ageLabel.textContent = "Âge:";
                const age = document.createTextNode(` ${playerData.age} ans`);

                const tailleLabel = document.createElement("strong");
                tailleLabel.textContent = "Taille:";
                const taille = document.createTextNode(` ${playerData.taille}`);

                const poidsLabel = document.createElement("strong");
                poidsLabel.textContent = "Poids:";
                const poids = document.createTextNode(` ${playerData.poids}`);

                const nationaliteLabel = document.createElement("strong");
                nationaliteLabel.textContent = "Nationalité:";
                const nationalite = document.createTextNode(` ${playerData.nationalite}`);

                // Ajouter les éléments au paragraphe
                playerInfo.appendChild(ageLabel);
                playerInfo.appendChild(age);
                playerInfo.appendChild(document.createElement("br"));
                playerInfo.appendChild(tailleLabel);
                playerInfo.appendChild(taille);
                playerInfo.appendChild(document.createElement("br"));
                playerInfo.appendChild(poidsLabel);
                playerInfo.appendChild(poids);
                playerInfo.appendChild(document.createElement("br"));
                playerInfo.appendChild(nationaliteLabel);
                playerInfo.appendChild(nationalite);

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
                playerCard.appendChild(playerInfo);
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
