import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../../utils/mutations.js";

import Auth from "../../../utils/auth.js";

const ParentSignup = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });
  const [errorState, setErrorState] = useState("");

  const [addUser, { error, data }] = useMutation(ADD_USER);
  const navigate = useNavigate();

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

  // // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (formState.password !== formState.confirmPassword) {
        setErrorState("Passwords do not match!");
        return;
      }

      const { data } = await addUser({
        variables: formState,
      });

      setFormState({
        ...formState,
      });

      Auth.login(data.addUser.token);

      // Redirect to ChildSignup
      navigate(`/ChildSignup`);
    } catch (e) {
      console.error(e);
      setErrorState(e.message); // Set the error message from the mutation
    }

    // // clear form values
    // setFormState({
    //   name: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   parentId: "",
    // });
  };

  return (
    <div className="Signup-body">
      <div className="parentRow">
        <div className="grownUpContainer">
          <img
            className="grownUpImg"
            src="./Photos/Grownup.png"
            alt="Girl Magnifying Glass"
          />
        </div>
        <div className="col Mali">
          <h1 className="parTitle">This stuff is for grownups!</h1>
          <form onSubmit={handleFormSubmit} className="col  form">
            <input
              className="form-input emailFrom"
              placeholder="Your full name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
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
              <input
                className="form-input"
                placeholder="Confirm your password"
                name="confirmPassword"
                type={formState.showPassword ? "text" : "password"}
                value={formState.confirmPassword}
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
            {errorState && (
              <div
                className="my-3 p-3 bg-danger text-white"
                style={{ color: "red" }}
              >
                {errorState}
              </div>
            )}
            <button
              className="btn btn-block btn-primary BtnRed"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </button>
          </form>
          {/* <a href='/ChildSignup'>
          </a> */}

          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentSignup;
