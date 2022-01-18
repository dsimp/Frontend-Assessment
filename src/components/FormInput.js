import React, { useState } from "react";
import useEndPoint from "./hooks/useEndPoint";
import useSendPost from "./hooks/useSendPost";
import "./FormInput.css";
import SignUpSuccess from "./SignUpSuccess";

function FormInput() {
  const [inputs, setInputs] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { state, occupation } = useEndPoint();
  useSendPost(inputs, submitted);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs((inputs) => ({ ...inputs }));
    setFormErrors(handleErrors(inputs));

    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
    //setSubmitted(true);
    console.log(inputs);
    console.log(status);

    handleClearForm(inputs);
  };

  const handleClearForm = (values) => {
    if (submitted) {
      values.state = "";
      values.email = "";
      values.password = "";
      values.occupation = "";
      values.name = "";
      setSubmitted(false);
    }
  };

  //useEffect(() => {
  //if (Object.keys(formErrors).length === 0) {
  //setSubmitted(true);
  //}
  //}, [formErrors]);

  const handleErrors = (values) => {
    const errors = {};
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name || / /.test(values.name) === false) {
      errors.name = "First and last name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailCheck.test(values.email)) {
      errors.email = "Please submit a valid email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Please submit password with 5 or more characters";
    }
    if (!values.occupation || values.occupation === " ") {
      errors.occupation = "Please select a occupation";
    }
    if (!values.state || values.state === " ") {
      errors.state = "Please select a state";
    }

    return errors;
  };

  return (
    <div className="container">
      {submitted ? <SignUpSuccess name={inputs.name} /> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={inputs.name || ""}
            onChange={handleChange}
            required
          />
          <p>{formErrors.name}</p>
        </div>

        <div>
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={inputs.email || ""}
            onChange={handleChange}
            required
          />
          <p>{formErrors.email}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={inputs.password || ""}
            onChange={handleChange}
            required
          />
          <p>{formErrors.password}</p>
        </div>
        <div>
          <label htmlFor="occupation"> Occupation</label>
          <select
            name="occupation"
            id="occupation"
            value={inputs.occupation || ""}
            onChange={handleChange}
            required
          >
            <option value=" " />
            {occupation.map((job) => (
              <option value={job} key={job}>
                {job}
              </option>
            ))}
          </select>
          <p>{formErrors.occupation}</p>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            value={inputs.state || ""}
            onChange={handleChange}
            required
          >
            <option value=" " />
            {state.map((states) => (
              <option value={states.name} key={states.abbreviation}>
                {states.abbreviation}
              </option>
            ))}
          </select>
          <p>{formErrors.state}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormInput;
