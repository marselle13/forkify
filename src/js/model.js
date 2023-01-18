import { API_URL } from "./config";
import { getJSON } from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    results: [],
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    const { recipe } = data.data;

    state.recipe = {
      title: recipe.title,
      image: recipe.image_url,
      time: recipe.cooking_time,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      source: recipe.source_url,
    };
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
};

export const loadSearchResults = async function (input) {
  try {
    const data = await getJSON(`${API_URL}?search=${input}`);
    const { recipes } = data.data;
    state.search.results = recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image_url,
        publisher: recipe.publisher,
      };
    });
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
};
loadSearchResults("pizza");
