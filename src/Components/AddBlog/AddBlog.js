import React from 'react';
import { useForm } from 'react-hook-form';

const AddBlog = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = e => {

        const blogData = {
            Title: e.Title,
            Author_Name: e.Author_Name,
            Phone: e.Phone,
            Email: e.Email,
            Description: e.Description,
        };

        const url = `https://shocking-catacombs-41932.herokuapp.com/addUser`;
        // console.log(blogData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            .then(res => console.log('server side res ', res))
    };

    return (
        <section className="container">
            <div className="p-4 pr-5">
                <h5 className="text-center">Add New Blog</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputTitle" className="form-label">Blog Title</label>
                        <input type="char" ref={register({ required: true })} name="Title" placeholder="enter title" className="form-control" />
                        {errors.Title && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputAuthor" className="form-label">Author Name</label>
                        <input type="text" ref={register({ required: true })} name="Author_Name" placeholder="enter author name" className="form-control" />
                        {errors.Author_Name && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputPhone" className="form-label">Phone Number</label>
                        <input type="text" ref={register({ required: true })} name="Phone" placeholder="enter phone number" className="form-control" />
                        {errors.Phone && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail" className="form-label">Email Address</label>
                        <input type="email" ref={register({ required: true })} name="Email" placeholder="enter e-mail address" className="form-control" />
                        {errors.Email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputDescription" className="form-label">Blog Description</label>
                        <input type="text" ref={register({ required: true })} name="Description" placeholder="enter description" className="form-control" />
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