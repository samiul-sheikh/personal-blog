import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const UpdateBlog = ({ modalIsOpen, blogs, closeModal }) => {

    useEffect(() => {
        if (!blogs) {
            closeModal();
        }
    }, []);
    console.log(blogs);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log("data", data);
        const URL = `https://care-box-backend.herokuapp.com/api/v1/applicant_test/update_blog/${blogs.id}`;
        const blogData = {
            id: blogs.id,
            Title: data.Title,
            Author_Name: data.Author_Name,
            Phone: data.Phone,
            Email: data.Email,
            Description: data.Description,
        };
        fetch(URL, {
            method: "PUT",
            headers: {
                "Custom-User-Agent": "gsdf#g3243F466$",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blogData),
        })
            .then((res) => {
                closeModal()
            })
            .catch((e) => console.log("update", e));
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputTitle" className="form-label">
                            Blog Title
                        </label>
                        <input
                            type="text"
                            defaultValue={blogs ? blogs.Title : ""}
                            ref={register({ required: true })}
                            name="Title"
                            placeholder="enter title"
                            className="form-control"
                        />
                        {errors.Title && (
                            <span className="text-danger">this field is required</span>
                        )}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputAuthor" className="form-label">
                            Author Name
                        </label>
                        <input
                            type="text"
                            defaultValue={blogs ? blogs.Author_Name : ""}
                            ref={register({ required: true })}
                            name="Author_Name"
                            placeholder="enter author name"
                            className="form-control"
                        />
                        {errors.Author_Name && (
                            <span className="text-danger">this field is required</span>
                        )}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPhone" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            defaultValue={blogs ? blogs.Phone : ""}
                            ref={register({ required: true })}
                            name="Phone"
                            placeholder="enter phone number"
                            className="form-control"
                        />
                        {errors.Phone && (
                            <span className="text-danger">this field is required</span>
                        )}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            defaultValue={blogs ? blogs.Email : ""}
                            ref={register({ required: true })}
                            name="Email"
                            placeholder="enter e-mail address"
                            className="form-control"
                        />
                        {errors.Email && (
                            <span className="text-danger">This field is required</span>
                        )}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputDescription" className="form-label">
                            Blog Description
                        </label>
                        <textarea rows="3"
                            defaultValue={blogs ? blogs.Description : ""}
                            ref={register({ required: true })}
                            name="Description"
                            placeholder="enter description"
                            className="form-control"
                        />
                        {errors.Description && (
                            <span className="text-danger">this field is required</span>
                        )}
                    </div>
                    <div className="form-group d-grid mx-auto">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default UpdateBlog;