import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import searchTermReducer from '../features/searchTerm/searchTermSlice.js';
import allRecipesReducer from '../features/allRecipes/allRecipesSlice.js';
//A normal Redux application has a JS object at the top of its state tree

// A store holds the whole state tree of your application
// A store is not a class (it's just an object with a few methods on it)
export const store = configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  }
});
