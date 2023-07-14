import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/posts');
            setPosts(response.data.posts);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePost = async (e) => {
        e.preventDefault();

        try {

            const user_id = localStorage.getItem('user_id');
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('image', image);
            formData.append('user_id', user_id);

            const response = await axios.post('http://localhost:3001/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'user_id': localStorage.getItem('user_id')
                },
            });

            console.log(response.data);
            fetchPosts();

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

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <div className='feed-header'>
                <h1>EOS Social Network</h1>
                <div className='post-button'>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        Post
                    </button>
                </div>
            </div>

            <p>Post Feed</p>

            <div>
                {/* Render the posts */}
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        {post.image && <img src={`../${post.image}`} alt="Post Image" />}
                    </div>
                ))}
            </div>

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
                            <label>
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
                                <div className="form-group">
                                    <label htmlFor="image">Image:</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    data-bs-dismiss="modal"
                                    className="btn btn-primary"
                                    onClick={e => handlePost(e)}>
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
