import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signin">
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button onClick={register} className="login__register">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
