import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const Login = () => {
    const history = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (!user.trim() || !password.trim()) {
            setError('Please enter both email and password');
            return;
        }

        const validUser = "navkanj@gmail.com";
        const validPass = "123456";

        if (user === validUser && password === validPass) {
            history('/');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <Nav />
            <section className="form-container">
                <form onSubmit={handleLogin}>
                    <h3>Welcome back!</h3>
                    <input
                        type="email"
                        name="email"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                        maxLength="50"
                        placeholder="Enter your email"
                        className="box"
                    />
                    <input
                        type="password"
                        name="pass"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        maxLength="20"
                        placeholder="Enter your password"
                        className="box"
                    />
                    {error && <p className="error">{error}</p>}
                    <p>Don't have an account? <Link to="/register">Register now</Link></p>
                    <button type="submit" className="btn">
                        Login now
                    </button>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Login;
