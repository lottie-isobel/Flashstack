import React from "react";
import "./index.css";

export default function SignUpPage() {
  return (
    <div className="signup-page">
      <h1>Create an account</h1>
      <form className="signup">
        <div className="name">
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="first name"
            required
          />
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="last name"
            required
          />
        </div>
        <div className="email">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email address"
            required
          />
        </div>
        <div className="userdetails">
          <input
            type="text"
            id="password"
            name="password"
            placeholder="password"
            required
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required
          />
        </div>
        <input className="signup-button" type="submit" value="Sign Up"></input>
      </form>
    </div>
  );
}
