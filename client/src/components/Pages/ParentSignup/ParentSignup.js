
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

const ParentSignup = (props) => {
  const [formState, setFormState] = useState({ fname: '', lname: '', email: '', password: '' });
  // const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);
  //   try {
  //     const { data } = await login({
  //       variables: { ...formState },
  //     });

  //     Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }

  // clear form values
  // setFormState({
  //   fname: '',
  //   lname: '',
  //   email: '',
  //   password: '',
  // });

  return (

    <div className="Signup-body">
      <div className='row'>
        <img className="imgBook" src='./Photos/Grownup.png' alt="A bunny" />
        <div className='col Mali'>

          <h1 className='parTitle'>This stuff is for grownups!</h1>
          <form className='col  form'>
            <div className='row passwordInput'>

              <input
                className="form-input"
                placeholder="Password"
                name="fpassword"
                type="fpassword"
                value={formState.fpassword}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
              // onChange={handleChange}
              />
            </div>
            <input
              className="form-input emailFrom"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
            //onChange={handleChange}
            />
          </form>
          <a href='/ChildSignup'>

            <button
              className="btn btn-block btn-primary BtnRed"
              style={{ cursor: 'pointer' }}


            >
              Submit
            </button>
          </a>

          {/* 
          {error && (
            <div className="my-3 p-3 bg-danger text-white">
            {error.message}
            </div>
          )} */}
        </div>
      </div>
    </div>

  );
};


export default ParentSignup
