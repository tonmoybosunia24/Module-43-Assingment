import PropTypes from "prop-types"; // Import PropTypes

const CurrentCooked = ({ currentCook }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = currentCook;
    
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Add prop validation
CurrentCooked.propTypes = {
    currentCook: PropTypes.shape({
        recipe_id: PropTypes.string.isRequired, // Validate recipe_id as a required string
        recipe_name: PropTypes.string.isRequired, // Validate recipe_name as a required string
        preparing_time: PropTypes.string.isRequired, // Validate preparing_time as a required string
        calories: PropTypes.string.isRequired // Validate calories as a required string
    }).isRequired
};

export default CurrentCooked;