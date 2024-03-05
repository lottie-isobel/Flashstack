import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function LoginPage() {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="signup">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          required
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          required
        />
        <div class="button-wrap">
          <input className="login-button" type="submit" value="Login" />
        </div>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
