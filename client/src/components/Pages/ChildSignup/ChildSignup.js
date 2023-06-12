import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_CHILD } from "../../../utils/mutations.js";
import Auth from '../../../utils/auth.js';

function ChildSignup() {

    console.log("**************Auth**************");
    console.log(Auth);
    const [formState, setFormState] = useState({
        name: '',
    });
    const [addChild, { error, data }] = useMutation(ADD_CHILD);

    //This is where we get the parent id
    // const params = useParams();
    // const parentId = params.id; // Get the parent ID from the logged-in user


    //*****************This is temporal for testing only *****************
    const parentId = "648120efe2bd4c85b75a1c93";
    //*****************This is temporal for testing only *****************


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
                    //parentId: parentId, // Pass the parent ID as a variable
                    name: formState.name,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="Signup-body backgroundY" >

            <div className="row">

                <img className="imgBook" src='./Photos/Fox.png' alt="A Fox" />
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

                        </form>
                        <button className="BtnRed" onClick={handleFormSubmit}>All Done!</button>
                        {/* <button className="BtnRed" >All Done!</button> */}
                    </div>
                </div>

            </div >
        </div >
    );
}

export default ChildSignup;