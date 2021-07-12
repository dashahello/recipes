import { createSlice } from '@reduxjs/toolkit';

// Without createSlice()
// const initialState = '';

// export const searchTermReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'searchTerm/setSearchTerm':
//       return action.payload;

//     case 'searchTerm/clearSearchTerm':
//       return '';

//     default:
//       return state;
//   }
// };

// export function setSearchTerm(term) {
//   return {
//     type: 'searchTerm/setSearchTerm',
//     payload: term
//   };
// }

// export function clearSearchTerm() {
//   return {
//     type: 'searchTerm/clearSearchTerm'
//   };
// }

// With createSlice()
export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => {
      return action.payload;
    },
    clearSearchTerm: (state, action) => {
      return '';
    }
  }
});

//export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;

// Selector
// A selector function, or selector, is a pure function that selects data from the Redux store’s state
// Selectors are created to give instructions on retrieving data from the store
// Each component in an application that needs access to the state will have one or more selectors that extract only the necessary data for that component
export const selectSearchTerm = (state) => state.searchTerm;
