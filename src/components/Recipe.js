export default function Recipe({ recipe, children }) {
  return (
    <div key={recipe.id} className="recipe" tabIndex={0}>
      <span className="recipe-container">
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="image-container">
          <img
            src="https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs="
            alt=""
            className="recipe-image"
          />
        </div>
      </span>
      {children}
    </div>
  );
}
