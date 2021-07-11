import { createStore, combineReducers } from 'redux';
import { favoriteRecipesSlice } from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import { searchTermSlice } from '../features/searchTerm/searchTermSlice.js';
import { allRecipesSlice } from '../features/allRecipes/allRecipesSlice.js';

//A normal Redux application has a JS object at the top of its state tree

// A store holds the whole state tree of your application
// A store is not a class (it's just an object with a few methods on it)
export const store = createStore(
  combineReducers({
    // The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore
    favoriteRecipes: favoriteRecipesSlice.reducer,
    searchTerm: searchTermSlice.reducer,
    allRecipes: allRecipesSlice.reducer
  })
);
