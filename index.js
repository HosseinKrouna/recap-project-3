import { createCharacterCard } from "./components/card/card.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const url = "https://rickandmortyapi.com/api/character";
export async function fetchCharacters() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      createCharacterCard(data, 0);
      //console.log(data);
      return;
    } else {
      console.error("Ooops");
    }
  } catch (error) {
    console.error("ERROR occurred" + error.message);
  }
}
fetchCharacters();
