import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations.js';

import Auth from '../../../utils/auth.js';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (Auth.loggedIn()) {
    //         navigate('/ChildSignup');
    //     }
    // }, [navigate]);

    // update state based on form input changes
    const handleChange = (event) => {

        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            setFormState({
                ...formState,
                [name]: checked,
            });
        } else {
            setFormState({
                ...formState,
                [name]: value,
            });
        }

    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({ variables: formState });

            console.log(data);

            //Testing to see if this works
            Auth.login(data.login.token);

            // Redirect to ChildSignup
            navigate(`/ChildSignup/`);
            //navigate(`/ChildSignup/${data.login.user._id}`);

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="about-page">
            <div className="parentRow">
                <div className="col Mali">
                    <h1 className="parTitle">Login</h1>
                    {/* <div className="card-body"> */}
                    <form onSubmit={handleFormSubmit} className="col  form">
                        <div className="grownUpContainer">
                            <input
                                className="form-input emailFrom"
                                placeholder="Your email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <div className="passwordInput">
                                <input
                                    className="form-input"
                                    placeholder="Password"
                                    name="password"
                                    type={formState.showPassword ? "text" : "password"}
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <label>
                                    <input
                                        name="showPassword"
                                        type="checkbox"
                                        checked={formState.showPassword || false}
                                        onChange={handleChange}
                                    />
                                    Show Password
                                </label>
                            </div>
                        </div>
                        {/* <a href="/ChildSignup"> */}
                        <button
                            className="btn btn-block btn-primary BtnRed"
                            style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Submit
                        </button>
                        <p>
                            Don't have an account? <Link to="/ParentSignup">Signup here</Link>
                        </p>
                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
