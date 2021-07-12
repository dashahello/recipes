import { createSlice } from '@reduxjs/toolkit';
import allRecipesData from '../../data.js';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// Actions are plain JavaScript objects that have a type field (and most often also a payload field)
// You can think of an action as an event that describes something that happened in the application
// Action creators save time needed to type out the entire action object, reduce the chances to make a typo, and improve the readability of an application

// A "slice" is a collection of Redux reducer logic and actions for a single feature in an app
// The name comes from splitting up the root Redux state object into multiple "slices" of state
// A slice can be any data value (array of objects or just a string)

// Pre-loading the data so the application outputs something without action dispatching

// const initialState = allRecipesData;

// export const allRecipesReducer = (allRecipes = initialState, action) => {
//   switch (action.type) {
//     case 'allRecipes/loadData':
//       return action.payload;

//     case 'favoriteRecipes/addRecipe':
//       return allRecipes.filter((recipe) => recipe.id !== action.payload.id);

//     case 'favoriteRecipes/removeRecipe':
//       return [...allRecipes, action.payload];

//     default:
//       return allRecipes;
//   }
// };

// export const loadData = () => {
//   return {
//     type: 'allRecipes/loadData',
//     payload: allRecipesData
//   };
// };

// With createStore()

export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState: allRecipesData,
  reducers: {
    loadData: (state, action) => {
      return action.payload;
    },
    addRecipe: (state, action) => {
      return state.filter((recipe) => recipe.id !== action.payload.id);
    },
    removeRecipe: (state, action) => {
      return [...state, action.payload];
    }
  }
});

//export const allRecipesSlice = createSlice(options);

export default allRecipesSlice.reducer;

// Selectors
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state); // selectSearchTerm is imported

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
