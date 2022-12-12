import { cardContainer } from "../../index.js";
export function createCharacterCard(data, index) {
  console.log(data);

  const cardItem = document.createElement("li");
  cardItem.innerHTML = ` <div class="card__image-container">
  <img
    class="card__image"
    src=${data.results[index].image}
    alt="Rick Sanchez"
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${data.results[index].name}</h2>
  <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${data.results[index].status}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description">${data.results[index].type}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${data.results[index].episode.length}</dd>
  </dl>
</div>`;
  cardContainer.append(cardItem);
}
