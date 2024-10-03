import PropTypes from "prop-types"; // Import PropTypes

const Cooking = ({ cookdetal, handleWantCook }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = cookdetal;
    return (
        <div>
            <div className="mt-2 px-3 mb-2">
                <table className="bg-slate-200 w-full text-xs py-5 border-separate">
                    <tbody>
                        <tr className="bg-base-200">
                            <th>{recipe_id}</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <td>
                                <button
                                    onClick={() => handleWantCook(cookdetal)}
                                    className="bg-green-500 p-1 px-2 rounded-full"
                                >
                                    Preparing
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Add prop validation
Cooking.propTypes = {
    cookdetal: PropTypes.shape({
        recipe_id: PropTypes.string.isRequired,
        recipe_name: PropTypes.string.isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired
    }).isRequired,
    handleWantCook: PropTypes.func.isRequired // Define handleWantCook as a required function
};

export default Cooking;