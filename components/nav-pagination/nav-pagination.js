import { navigation } from "../../index.js";

export function createPagination(page, maxPage) {
  //   navigation.innerHTML = `<span class="navigation__pagination" data-js="pagination">1 / 1</span>`;
  const paginationNumber = document.createElement("span");
  paginationNumber.classList.add("navigation__pagination");
  paginationNumber.setAttribute("data-js", "pagination");
  navigation.append(paginationNumber);
  paginationNumber.textContent = `${page} / ${maxPage}`;
}
