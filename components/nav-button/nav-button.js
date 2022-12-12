import { navigation } from "../../index.js";
import { createPagination } from "../nav-pagination/nav-pagination.js";
export function createButton() {
  //   navigation.innerHTML = `<button class="button button--prev" data-js="button-prev">
  //     previous
  //   </button>
  //   <button class="button button--next" data-js="button-next">next</button>
  // `;
  const previousButton = document.createElement("button");
  previousButton.classList.add("button", "button--prev");
  previousButton.setAttribute("data-js", "button-prev");

  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.setAttribute("data-js", "button-next");
  navigation.append(previousButton);
}
