class searchView {
  #parentElement = document.querySelector(".search");

  getQuery() {
    const value = this.#parentElement.querySelector(".search__field").value;
    this.#clearSearchInput();
    return value;
  }

  #clearSearchInput() {
    this.#parentElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
