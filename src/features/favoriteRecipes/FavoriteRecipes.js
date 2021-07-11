import { useSelector, useDispatch } from 'react-redux';
import {
  favoriteRecipesSlice,
  selectFilteredFavoriteRecipes
} from './favoriteRecipesSlice.js';
import FavoriteButton from '../../components/FavoriteButton.js';
import Recipe from '../../components/Recipe.js';

const { removeRecipe } = favoriteRecipesSlice.actions;

const unfavoriteIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';

export const FavoriteRecipes = () => {
  const dispatch = useDispatch();

  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);

  const onRemoveRecipeHandler = (recipe) => {
    return dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipe-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // HelperFunction
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Fvorite
        </FavoriteButton>
      </Recipe>
    );
  }
};
