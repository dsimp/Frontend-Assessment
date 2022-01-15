import React from "react";

function FormInput() {
  return (
    <div className="container-fluid">
      <form>
        <div>
          <label> First Name</label>
          <input type="text" name="First Name" placeholder="First Name" />
        </div>
        <div>
          <label> Last Name</label>
          <input type="text" name="Last Name" placeholder="Last Name" />
        </div>
        <div>
          <label> Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <label> Occupation</label>
          <input type="text" name="occupation" placeholder="Occupation" />
        </div>
        <div>
          <label> State</label>
          <input type="state" name="state" placeholder="State" />
        </div>
      </form>
    </div>
  );
}

export default FormInput;
