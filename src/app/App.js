import { AllRecipes } from '../features/allRecipes/AllRecipes.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes.js';

function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Fvorite recipes</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2>All recipes</h2>
        <AllRecipes />
      </section>
    </main>
  );
}

export default App;
