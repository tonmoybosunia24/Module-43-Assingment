import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Cooking from "../Cooking/Cooking";
import CurrentCooking from "../CurrentCooking/CurrentCooking";

const Cookings = ({ cooksDetail }) => {
    const [currentCook, setCurrentCook] = useState([]);

    const handleWantCook = (cooked) => {
        const newCurrentCook = [...currentCook, cooked];
        setCurrentCook(newCurrentCook);
    };

    return (
        <div className="w-4/12 border-2 rounded-2xl text-center">
            <h2 className="mt-5 font-bold text-2xl">Want To Cook: {cooksDetail.length}</h2>
            <hr className="w-4/6 h-[1px] my-2 border-none bg-gray-300 m-auto" />
            <div className="mt-3 mb-2 flex mr-5 text-sm">
                <p className="ml-6">Name</p>
                <p className="ml-20">Time</p>
                <p className="ml-6">Calories</p>
            </div>
            {
                cooksDetail.map((cookDetail) => (
                    <Cooking
                        cookdetal={cookDetail}
                        key={cookDetail.recipe_id} // Corrected key usage
                        handleWantCook={handleWantCook}
                    />
                ))
            }
            <CurrentCooking currentCook={currentCook}></CurrentCooking>
        </div>
    );
};

// Add props validation
Cookings.propTypes = {
    cooksDetail: PropTypes.arrayOf(
        PropTypes.shape({
            recipe_id: PropTypes.string.isRequired, // Recipe ID is required and should be a string
            recipe_name: PropTypes.string.isRequired,
            preparing_time: PropTypes.string.isRequired,
            calories: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Cookings;