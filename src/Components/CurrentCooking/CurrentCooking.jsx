import PropTypes from "prop-types"; // Import PropTypes
import CurrentCooked from "../CurrentCooked/CurrentCooked";

const CurrentCooking = ({ currentCook }) => {
    return (
        <div>
            <h2 className="font-bold text-2xl">Current Cooking: {currentCook.length}</h2>
            <div className="mt-3 mb-2 flex mr-5 text-sm mb-3">
                <p className="ml-6">Name</p>
                <p className="ml-20">Time</p>
                <p className="ml-6">Calories</p>
            </div>
            {
                currentCook.map(currentCooks => (
                    <CurrentCooked key={currentCooks.recipe_id} currentCook={currentCooks}></CurrentCooked>
                ))
            }
        </div>
    );
};

// Add prop validation
CurrentCooking.propTypes = {
    currentCook: PropTypes.arrayOf(
        PropTypes.shape({
            recipe_id: PropTypes.string.isRequired, // Each item in currentCook must have a recipe_id
            recipe_name: PropTypes.string.isRequired,
            preparing_time: PropTypes.string.isRequired,
            calories: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CurrentCooking;