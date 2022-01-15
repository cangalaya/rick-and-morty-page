export const buildCard = (object) => {
    const card = document.createElement("article");
    card.classList.add("tarjet");
    
    let stringHtml = `
        <img src="${object.image}" alt="image ${object.name}">
        <h2>${object.name}</h2>
        <div class="description-tarjet">
            <p><b>Especies:</b> ${object.species}</p>
            <p><b>Gender:</b> ${object.gender}</p>
            <p><b>Origin:</b> ${object.origin.name}</p>
        </div>
        <div class="icons-target">
            <div class="icon-live">
                <img src="./img/utils/led-dead.svg" alt="icon ${object.status}">
                <p>${object.status}</p>
            </div>
            <div class="icon-location">
                <img src="./img/utils/icon-location.svg" alt="icon location">
                <p>${object.location.name}</p>
            </div>
        </div>
        `;

    if (object.status == 'Alive'){
        stringHtml = stringHtml.replace("led-dead.svg", "led-live.svg");
    }
    card.innerHTML = stringHtml;

    return card;
};
