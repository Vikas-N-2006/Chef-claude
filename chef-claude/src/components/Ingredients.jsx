import PropTypes from "prop-types";

export default function Ingredients(props) {
  const ingredientsList = props.list.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className='ingredients-list' aria-live='polite'>
        {ingredientsList}
      </ul>
      {props.list.length >= 4 ? (
        <div className='get-recipe-container'>
          <div ref={props.refer}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.recipe}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  );
}
Ingredients.propTypes = {
  list: PropTypes.array.isRequired,
  recipe: PropTypes.func.isRequired,
  refer: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
