import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        c_pass: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.pass.trim()) {
            newErrors.pass = 'Password is required';
        } else if (formData.pass.length < 6) {
            newErrors.pass = 'Password must be at least 6 characters';
        }
        if (!formData.c_pass.trim()) {
            newErrors.c_pass = 'Confirm Password is required';
        } else if (formData.pass !== formData.c_pass) {
            newErrors.c_pass = 'Passwords do not match';
        }

        
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            window.location.href = '/login';
            setFormData({
                name: '',
                email: '',
                pass: '',
                c_pass: ''
            });
        }
    };

    return (
        <>
            <Nav />
            <section className="form-container">
                <form onSubmit={handleSubmit}>
                    <h3>Create an account!</h3>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your name"
                        className="box"
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                        className="box"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <input
                        type="password"
                        name="pass"
                        value={formData.pass}
                        onChange={handleInputChange}
                        required
                        minLength="6"
                        placeholder="Enter your password (min. 6 characters)"
                        className="box"
                    />
                    {errors.pass && <p className="error">{errors.pass}</p>}
                    <input
                        type="password"
                        name="c_pass"
                        value={formData.c_pass}
                        onChange={handleInputChange}
                        required
                        placeholder="Confirm your password"
                        className="box"
                    />
                    {errors.c_pass && <p className="error">{errors.c_pass}</p>}
                    <p>Already have an account? <Link to="/login">Login now</Link></p>
                    <button
                        type="submit"
                        style={{ width: "100%", height: "50px", backgroundColor: "#6c7ae4", color: "white", fontSize: "14px", borderRadius: "5px" }}
                    >
                        Register Now
                    </button>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Register;
