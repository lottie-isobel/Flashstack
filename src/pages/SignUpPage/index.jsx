import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async e => {
    e.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      const response = await fetch(
        "https://flashstack-backend.onrender.com/user/register",
        options
      );
      if (!response.ok) {
        setErrorMessage("An account already exists with this email.");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
        return;
      }
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup-page">
      <h1>Create an account</h1>
      <form className="signup" onSubmit={handleSignup}>
        <input
          onChange={handleInputChange}
          type="text"
          id="first_name"
          name="first_name"
          placeholder="first name"
          required
        />
        <input
          onChange={handleInputChange}
          type="text"
          id="last_name"
          name="last_name"
          placeholder="last name"
          required
        />

        <input
          onChange={handleInputChange}
          type="text"
          id="email"
          name="email"
          placeholder="email address"
          required
        />

        <div className="userdetails">
          <input
            onChange={handleInputChange}
            type="text"
            id="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <div className="button-wrap">
          <input className="signup-button" type="submit" value="Signup" />
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
