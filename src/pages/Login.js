import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="Login">
      <form className="Login_form">
        <input className="Login_username" type="text" placeholder="Username" />
        <input className="Login_password" type="text" placeholder="Password" />
        <button className="Login_button" type="submit">
          Login
        </button>
        <a className="Login_link" href="planets">
          Create an account?
        </a>
      </form>
    </div>
  );
}

export default Login;
