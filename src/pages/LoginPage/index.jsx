import React from "react";

export default function LoginPage() {
  return (
    <div>
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
      </form>
    </div>
  );
}
