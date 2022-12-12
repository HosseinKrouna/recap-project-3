console.clear();
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
/** TODO: Get maxPages value out of a promise async function */
const maxPage = 42;
let page = 1;
pagination.textContent = `${page} / ${maxPage}`;
const searchQuery = "";

// const url = "https://rickandmortyapi.com/api/character?page=42";

export async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  cardContainer.innerHTML = "";

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      data.results.forEach((element) => {
        createCharacterCard(element);
      });

      return;
    } else {
      console.error("Ooops");
    }
  } catch (error) {
    console.error("ERROR occurred" + error.message);
  }
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
    pagination.textContent = `${page} / ${maxPage}`;
    return;
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
    pagination.textContent = `${page} / ${maxPage}`;
    return;
  }
});
