import { useState, useEffect } from "react"
import AddBlog from './Components/AddBlog/AddBlog';
import Blogs from './Components/Blogs/Blogs';
import axios from "axios"

function App() {
    const [blogs, setBlogs] = useState([]);

    //fetch all blog
    const fetchBlog = async () => {
        const { data } = await axios.get("/api/v1/applicant_test/");
        setBlogs(data);
        console.log("fetchBlog home page agin");
    };

    // display all blogs here
    useEffect(() => {
        fetchBlog();
    }, []);

    return (
        <div>
            <AddBlog setBlogs={setBlogs} fetchBlog={fetchBlog} />
            <Blogs blogs={blogs} fetchBlog={fetchBlog} />
        </div>
    );
}

export default App;
