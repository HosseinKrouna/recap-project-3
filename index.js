console.clear();
import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');

// States
/** TODO: Get maxPages value out of a promise async function */
const maxPage = 42;
let page = 1;
let searchQuery = "";
createButton(page, maxPage);
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

export async function fetchCharacters() {
  // const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;

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

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(searchBar);
  const data = Object.fromEntries(formData);
  console.log(data.query);
  searchQuery = data.query;
  page = 1;
  pagination.textContent = `${page} / ${maxPage}`;
  fetchCharacters();
});
