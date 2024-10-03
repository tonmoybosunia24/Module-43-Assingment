import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div className="lg:px-20">
            <header>
                <nav className="flex justify-between items-center py-4">
                    <div>
                        <h1 className="text-2xl font-bold">Recipe Calories</h1>
                    </div>
                    <div>
                        <ul className="flex space-x-6">
                            <li><a href="#home" className="hover:text-gray-600">Home</a></li>
                            <li><a href="#recipes" className="hover:text-gray-600">Recipes</a></li>
                            <li><a href="#about" className="hover:text-gray-600">About</a></li>
                            <li><a href="#search" className="hover:text-gray-600">Search</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-slate-100 p-2 px-4 rounded-full">
                            <label className="input input-bordered flex items-center gap-2">
                                <IoIosSearch className="text-gray-600" />
                                <input
                                    type="text"
                                    className="grow outline-none bg-slate-100 w-36"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </label>
                        </div>
                        <div className="text-xl bg-green-300 p-2 rounded-full">
                            <FaRegUserCircle />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;