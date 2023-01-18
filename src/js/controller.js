import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultView from "./views/resultView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    resultView.renderSpinner();

    await model.loadSearchResults(query);
    resultView.render(model.state.search.results);
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
    resultView.renderError();
  }
};
controlSearchResult();
recipeView.addHandlerRender(showRecipe);
searchView.addHandlerSearch(controlSearchResult);
