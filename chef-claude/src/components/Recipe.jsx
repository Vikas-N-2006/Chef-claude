import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
export default function Recipe(props) {
  return (
    <section className='suggested-recipe-container' aria-live='polite'>
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
Recipe.propTypes = {
  recipe: PropTypes.string.isRequired,
};
