import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/register', { name, email, password });
            console.log(response.data);

            if (response.status === 201) {
                navigate('/login');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error(error);
            setError('Please enter the required information.')
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button
                    type="submit"
                    className="btn btn-primary">
                        Register
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default RegisterPage;
