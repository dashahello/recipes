import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// A normal Redux application has a JS object at the top of its state tree
//  We refer to one key/value section of that object as a “slice”
// We typically define one reducer for each slice of the state (“slice reducers”)
// Redux reducers must never mutate state
// Managing the state one slice at a time allows us to more effectively manage the distinct logic of each individual part of our application

// Without createSlice()
// const initialState = [];

// export const favoriteRecipesReducer = (
//   favoriteRecipes = initialState,
//   action
// ) => {
//   switch (action.type) {
//     case 'favoriteRecipes/addRecipe':
//       return [...favoriteRecipes, action.payload];

//     case 'favoriteRecipes/removeRecipe':
//       return favoriteRecipes.filter(
//         (recipe) => recipe.id !== action.payload.id
//       );

//     default:
//       return favoriteRecipes;
//   }
// };

// export function addRecipe(recipe) {
//   return {
//     type: 'favoriteRecipes/addRecipe',
//     payload: recipe
//   };
// }

// export function removeRecipe(recipe) {
//   return {
//     type: 'favoriteRecipes/removeRecipe',
//     payload: recipe
//   };
// }

// With createSlice() ( from Redux Toolkit)
// createSlice() takes advantage of Immer (helps to write "mutable" code)

export const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState: [],
  // "Case reducers" bellow
  // We can write the case reducers as functions inside of an object, instead of having to write a switch/case statement

  // When an action with the type 'favoriteRecipes/addRecipe' is dispatched, favoriteRecipesSlice will execute favoriteRecipesSlice.reducer()
  // to check if the dispatched action’s type matches one of favoriteRecipes.actions case reducers
  // If so, it will run the matching case reducer function and if not, it will return the current state
  reducers: {
    // Action creators that correspond to each case reducer function we provide will be automatically generated, so we don’t need to worry about defining those ourselves
    // No default handler needs to be written
    // The reducer generated by createSlice() will automatically handle all other action types by returning the current state, so we don’t have to list that ourselves
    // The action.type string is generated for us by combining the slice’s name field with the name of the case reducer function
    addRecipe: (state, action) => {
      return void state.push(action.payload); // error for now???
    },
    removeRecipe: (state, action) => {
      return state.filter((recipe) => recipe.id !== action.payload.id);
    }
  }
});

// for (const action in favoriteRecipesSlice.actions) {
//   console.log(action);
// }

export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;

// Selectors
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
