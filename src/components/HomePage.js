import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className='home-page'>
            <h1>Welcome to EOS Social Net</h1>
            <p>Please Register or Login</p>
            <div className='home-buttons'>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRegister}>
                        Register
                </button>
                <button type="button"
                    className="btn btn-primary"
                    onClick={handleLogin}>
                        Login
                </button>
            </div>
        </div>
    );
};

export default HomePage;
