import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  allRecipesSlice,
  selectFilteredAllRecipes
} from './allRecipesSlice.js';
import FavoriteButton from '../../components/FavoriteButton.js';
import Recipe from '../../components/Recipe';
import { favoriteRecipesSlice } from '../favoriteRecipes/favoriteRecipesSlice.js';

const { addRecipe } = favoriteRecipesSlice.actions;
const { loadData } = allRecipesSlice.actions;

const favoriteIconURL =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllRecipes = () => {
  const allRecipes = useSelector(selectFilteredAllRecipes);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  };

  useEffect(onFirstRender, [dispatch]);

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipe-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
