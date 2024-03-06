import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export default function LoginPage() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const options = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
      const response = await fetch("https://flashstack-backend.onrender.com/user/login", options)
      if(!response.ok){
        setErrorMessage("Incorrect username or password.")
        setTimeout(() => {
          setErrorMessage("")
        }, 2000)
        return
      }
      const data = await response.json()
      window.localStorage.addItem("token", data.token)
      navigate("/dashboard")
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="signup" onSubmit={handleLogin}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleInputChange}
          required
        />
        <div className="button-wrap">
          <input className="login-button" type="submit" value="Login" />
        </div>

        <p className="no-account">

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>

          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
