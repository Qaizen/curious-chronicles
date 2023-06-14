import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_CHILD } from "../../../utils/mutations.js";
import { GET_PARENT } from "../../../utils/queries.js";
import { GET_ME } from "../../../utils/queries.js"
import Auth from '../../../utils/auth.js';

function ChildSignup() {

    const { data: meData } = useQuery(GET_ME);
    const user = meData?.me;

    // we receive a variable between curly brackets
    console.log("userMe");
    console.log(user);

    console.log("**************Auth**************");
    console.log(Auth);
    const [formState, setFormState] = useState({ name: '' });
    const [addChild, { error, data }] = useMutation(ADD_CHILD);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addChild({
                variables: {
                    name: formState.name,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="Signup-body backgroundY" >

            <a href='/Home'>
                {user?.savedChildren.length > 0 && (
                    <h1 className='childName'>
                        {user.savedChildren[0].name}
                    </h1>
                )}
            </a>
            <div className="row">
                <img className="imgBook" src='../Photos/Fox.png' alt="A Fox" />
                <div >
                    <h1 className="parTitle Mali">Now for the fun part!</h1>
                    <div className='col '>
                        <form className='col form'>
                            <label className="label" >Your Name!</label>
                            <input
                                className="childform-input"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                            />
                            <button className="BtnRed" onClick={handleFormSubmit}>All Done!</button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default ChildSignup;