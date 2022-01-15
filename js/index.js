import { fetchData } from "./utils/fetchData.js"
import { buildCard } from "./utils/buildCard.js";
const API = 'https://rickandmortyapi.com/api/character/';

const containerTarjet = document.getElementById("container-targets");

const asyncDataJson = async () => {
    const data = await fetchData(API);
    let firt10Personajes = data.results.filter((object) => object.id <= 20)
    firt10Personajes.map(personaje => {
        const card = buildCard(personaje);
        containerTarjet.appendChild(card);
    })
}
asyncDataJson();
    
