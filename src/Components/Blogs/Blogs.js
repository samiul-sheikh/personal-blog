import React, { useState, useEffect } from 'react';
import UpdateBlog from '../UpdateBlog/UpdateBlog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    // display all blogs here
    useEffect(() => {
        fetch('https://care-box-backend.herokuapp.com/api/v1/applicant_test/')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const updateBlog = (id) => {
        fetch(`https://care-box-backend.herokuapp.com/api/v1/applicant_test/update_blog/{id}/`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="container">
            <div className="p-4 pr-5">
                <h3>Blog List</h3>
                <table className="table table-bblogless">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog) => (
                            <tr>
                                <td>{blog.Title} </td>
                                <td>{blog.Author_Name}</td>
                                <td>{blog.Phone}</td>
                                <td>{blog.Email}</td>
                                <td>{blog.Description}</td>
                                <td>
                                    <button onClick={openModal} className="btn btn-info">UPDATE</button>
                                </td>
                                <UpdateBlog modalIsOpen={modalIsOpen} blogs={blogs} closeModal={closeModal}></UpdateBlog>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;