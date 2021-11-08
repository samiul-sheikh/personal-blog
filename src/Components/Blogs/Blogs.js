import React, { useState, useEffect } from "react";
import UpdateBlog from "../UpdateBlog/UpdateBlog";
import axios from "axios";

const Blogs = ({ blogs, fetchBlog }) => {

    const [selectedBlog, setSelectedBlog] = useState(null);

    //modal here
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal(blog) {
        setSelectedBlog(blog);
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
                        {blogs.map((blog, index) => (
                            <tr key={index}>
                                <td>{blog.Title} </td>
                                <td>{blog.Author_Name}</td>
                                <td>{blog.Phone}</td>
                                <td>{blog.Email}</td>
                                <td>{blog.Description}</td>
                                <td>
                                    <button
                                        onClick={() => openModal(blog)}
                                        className="btn btn-info"
                                    >
                                        UPDATE
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <UpdateBlog
                    modalIsOpen={modalIsOpen}
                    blogs={selectedBlog}
                    closeModal={closeModal}
                    fetchBlog={fetchBlog}
                ></UpdateBlog>
            </div>
        </div>
    );
};

export default Blogs;
