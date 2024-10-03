import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import headerImage from "./../../assets/Rectangle 1.jpg"; // Import the image

const Header = () => {
    return (
        <div className="px-5 lg:px-20">
            <header>
                <nav className="flex justify-center md:justify-between gap-3 lg:justify-between flex-wrap items-center py-4">
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
                        <div className="text-xl bg-[#0BE58A] p-2 rounded-full">
                            <FaRegUserCircle />
                        </div>
                    </div>
                </nav>
                <div className="w-full h-[500px] bg-cover text-center pt-36 text-white mb-5 bg-center rounded-2xl" style={{ backgroundImage: `url(${headerImage})` }}>
                    <h2 className="font-bold text-xl lg:text-3xl">Discover an exceptional cooking <br /> class tailored for you!</h2>
                    <p className="py-2 hidden lg:block">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br></br> problems to become an exceptionally well world-class Programmer.</p>
                    <p className="py-2 lg:hidden text-sm px-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="flex gap-5 justify-center">
                            <button className="bg-green-400 font-bold text-black px-3 lg:px-5 py-3  rounded-full">Explore Now</button>
                            <button className="border-white font-bold text-white border-2 px-3 lg:px-5 rounded-full">Our Feedback</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;

