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
        <div>
            <h1>EOS Social Network</h1>
            <p>Register or Login</p>
            <div>
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
