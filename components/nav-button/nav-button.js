import { navigation } from "../../index.js";
import { createPagination } from "../nav-pagination/nav-pagination.js";

export function createButton(page, maxPage) {
  console.log("hello");
  const previousButton = document.createElement("button");
  previousButton.classList.add("button", "button--prev");
  previousButton.setAttribute("data-js", "button-prev");
  previousButton.textContent = "Previous";

  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.textContent = "Next";

  navigation.append(previousButton);
  createPagination(page, maxPage);
  navigation.append(nextButton);
}
