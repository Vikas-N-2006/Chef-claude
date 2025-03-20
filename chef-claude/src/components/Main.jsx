import React from "react";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
import { getRecipeFromMistral } from "../api";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");

    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      event.target.reset();
    }
  }

  return (
    <main>
      <form onSubmit={addIngredient} className='add-ingredient'>
        <input
          type='text'
          placeholder='e.g. oregano'
          aria-label='Add ingredient'
          name='ingredient'
        />
        <button type='submit'>Add ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <Ingredients
          refer={recipeSection}
          recipe={getRecipe}
          list={ingredients}
        />
      ) : null}
      {recipe ? <Recipe recipe={recipe} /> : null}
    </main>
  );
}
