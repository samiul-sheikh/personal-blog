import React from 'react';
import { useForm } from 'react-hook-form';

const AddBlog = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        const blogData = {
            Title: data.Title,
            Author_Name: data.Author_Name,
            Phone: data.Phone,
            Email: data.Email,
            Description: data.Description,
        };

        const url = 'https://care-box-backend.herokuapp.com/api/v1/applicant_test/';
        console.log(blogData);

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blogData)
        })
            .then(res => alert('send success'))
            .catch(e => alert('send error'))
    };

    return (
        <section className="container">
            <div className="p-4 pr-5">
                <h5 className="text-center">Add New Blog</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputTitle" className="form-label">Blog Title</label>
                        <input type="char" ref={register({ required: true })} name="Title" placeholder="enter title" className="form-control" />
                        {errors.Title && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputAuthor" className="form-label">Author Name</label>
                        <input type="char" ref={register({ required: true })} name="Author_Name" placeholder="enter author name" className="form-control" />
                        {errors.Author_Name && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                        <input type="char" ref={register({ required: true })} name="Phone" placeholder="enter phone number" className="form-control" />
                        {errors.Phone && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">Email Address</label>
                        <input type="email" ref={register({ required: true })} name="Email" placeholder="enter e-mail address" className="form-control" />
                        {errors.Email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputDescription" className="form-label">Blog Description</label>
                        <textarea rows="3" ref={register({ required: true })} name="Description" placeholder="enter description" className="form-control" />
                        {errors.Description && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group d-grid mx-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddBlog;