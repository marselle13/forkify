import icons from "url:../../img/icons.svg";
import Views from "./views.js";

class PaginationView extends Views {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const button = e.target.closest(".btn--inline");
      if (!button) return;
      const goToPage = +button.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPage = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //page 1 and there are other pages
    if (this._data.page === 1 && numPage > 1) {
      return `
    <button data-goto="${
      this._data.page + 1
    }" class="btn--inline pagination__btn--next">
      <span>${this._data.page + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    //last page
    if (this._data.page === numPage && numPage > 1) {
      return `<button data-goto="${
        this._data.page - 1
      }"  class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>${this._data.page - 1}</span>
    </button>`;
    }
    //other page
    if (this._data.page < numPage) {
      return `<button data-goto="${
        this._data.page - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>${this._data.page - 1}</span>
    </button>
    <button data-goto="${
      this._data.page + 1
    }" class="btn--inline pagination__btn--next">
      <span>${this._data.page + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    //page 1 and no other
    return ``;
  }
}

export default new PaginationView();
