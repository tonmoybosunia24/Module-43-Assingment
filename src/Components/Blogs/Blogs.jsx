import { useEffect, useState } from "react";
import PropTypes from "prop-types";  // Import PropTypes
import Blog from "../Blog/Blog";

const Blogs = ({ handleCookDetails }) => {
       const [blogs, setBlogs] = useState([]);

       useEffect(() => {
              fetch('Blogs/Blogs.json')
              .then(res => res.json())
              .then(data => setBlogs(data));
       }, []);

       return (
              <div className="w-8/12">
                     <div className="grid grid-cols-2 gap-5">
                     {
                            blogs.map(blog => <Blog key={blog.id} blogs={blog} handleCookDetails={handleCookDetails}></Blog>)
                     }
                     </div>
              </div>
       );
};

// Add prop validation
Blogs.propTypes = {
    handleCookDetails: PropTypes.func.isRequired,  // Define handleCookDetails as a required function
};

export default Blogs;