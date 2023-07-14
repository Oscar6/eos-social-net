import React, { useState } from 'react';
import axios from 'axios';

const FeedPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handlePost = async () => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('image', image);

            const response = await axios.post('http://localhost:3001/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
            // Handle successful post creation

        } catch (error) {
            console.error(error);
            // Handle error
        } finally {
            // Reset form fields
            setTitle('');
            setDescription('');
            setImage(null);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div>
            <h1>EOS Social Network</h1>
            <p>Post Feed</p>

            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
            >
                Post
            </button>

            <div className="modal fade" id='myModal' data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create a Post</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            >
                            </button>
                        </div>
                        <div className="modal-body">
                            <label onSubmit={handlePost}>
                                <div className="form-group">
                                    <label>Title:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description:</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        rows="4"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedPage;
