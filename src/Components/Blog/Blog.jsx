import Engredient from "../Engredient/Engredient";
import { FaRegClock } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import PropTypes from "prop-types"; // Import PropTypes

const Blog = ({ blogs, handleCookDetails }) => {
    const {
        recipe_image,
        recipe_name,
        short_description,
        ingredients,
        preparing_time,
        calories,
    } = blogs;

    return (
        <div className="border-2 rounded-2xl space-y-1 p-5">
            <div>
                <img className="w-full h-48 rounded-2xl" src={recipe_image} alt="" />
            </div>
            <h3>{recipe_name}</h3>
            <p>{short_description}</p>
            <h5>Ingredients: {ingredients.length}</h5>
            {
                ingredients.map((ingredient, idx) => (
                    <Engredient key={idx} ingredient={ingredient}></Engredient>
                ))
            }
            <div className="flex justify-between">
                <p className="flex items-center gap-2"><FaRegClock />{preparing_time}</p>
                <p className="flex items-center gap-2"><FaFire />{calories}</p>
            </div>
            <button onClick={() => handleCookDetails(blogs)} className="bg-green-300 p-2 text-sm">
                Want To Cook
            </button>
        </div>
    );
};

// Add prop validation
Blog.propTypes = {
    blogs: PropTypes.shape({
        recipe_image: PropTypes.string.isRequired,
        recipe_name: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired,
        recipe_id: PropTypes.string.isRequired
    }).isRequired,
    handleCookDetails: PropTypes.func.isRequired // Define handleCookDetails as a required function
};

export default Blog;