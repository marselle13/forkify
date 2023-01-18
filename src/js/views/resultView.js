import Views from "./views";
import icons from "url:../../img/icons.svg";
class ResultView extends Views {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No Search result";

  _generateMarkup() {
    return this._data
      .map(
        (rec) => `
  <li class="preview">
  <a class="preview__link" href="#${rec.id}">
    <figure class="preview__fig">
      <img src="${rec.image}" alt="Test" />
    </figure>
    <div class="preview__data">
      <h4 class="preview__title">${rec.title}</h4>
      <p class="preview__publisher">${rec.publisher}</p>
   
    </div>
  </a>
</li>
  `
      )
      .join(" ");
  }
}

export default new ResultView();
