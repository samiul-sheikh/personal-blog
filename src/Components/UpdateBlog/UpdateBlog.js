import React from 'react';
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

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputTitle" className="form-label">Blog Title</label>
                        <input type="char" ref={register({ required: true })} name="Title" placeholder="enter title" className="form-control" />
                        {errors.Title && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputAuthor" className="form-label">Author Name</label>
                        <input type="char" ref={register({ required: true })} name="Author_Name" placeholder="enter author name" className="form-control" />
                        {errors.Author_Name && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputPhone" className="form-label">Phone Number</label>
                        <input type="char" ref={register({ required: true })} name="Phone" placeholder="enter phone number" className="form-control" />
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
            </Modal>
        </div>
    );
};

export default UpdateBlog;