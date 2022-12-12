import { navigation } from "../../index.js";

export function createPagination() {
  //   navigation.innerHTML = `<span class="navigation__pagination" data-js="pagination">1 / 1</span>`;
  const paginationNumber = document.createElement("span");
  paginationNumber.classList.add("navigation__pagination");
  paginationNumber.setAttribute("data-js", "pagination");
  paginationNumber.textContent = "1 / 1";
  navigation.append(paginationNumber);
}
