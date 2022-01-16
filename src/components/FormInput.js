import React, { useState, useEffect } from "react";
import useEndPoint from "./hooks/useEndPoint";

function FormInput() {
  const [inputs, setInputs] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { state, occupation } = useEndPoint();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(handleErrors(inputs));
    setSubmitted(true);
    console.log(inputs);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && submitted) {
      console.log(inputs);
    }
  }, [formErrors]);

  const handleErrors = (values) => {
    const errors = {};
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "First name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailCheck.test(values.email)) {
      errors.email = "Please submit a valid email";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 5) {
      errors.password = "Please submit password with 5 or more characters";
    }

    return errors;
  };

  console.log(state);
  console.log(occupation);

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div>
          <label> First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={inputs.firstname || ""}
            onChange={handleChange}
          />
          <p>{formErrors.firstname}</p>
        </div>
        <div>
          <label> Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={inputs.lastname || ""}
            onChange={handleChange}
          />
          <p>{formErrors.lastname}</p>
        </div>
        <div>
          <label> Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
        </div>
        <div>
          <label> Occupation</label>
          <select
            name="occupation"
            value={inputs.occupation || ""}
            onChange={handleChange}
          >
            {occupation.map((job) => (
              <option value={job} key={job}>
                {job}
              </option>
            ))}
          </select>
          <p>{formErrors.occupation}</p>
        </div>
        <div>
          <label>State</label>
          <select
            name="state"
            value={inputs.state || ""}
            onChange={handleChange}
          >
            {state.map((states) => (
              <option value={states.name} key={states.abbreviation}>
                {states.abbreviation}
              </option>
            ))}
          </select>
          <p>{formErrors.state}</p>
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default FormInput;
