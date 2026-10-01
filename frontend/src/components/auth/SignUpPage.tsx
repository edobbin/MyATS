import "./auth.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/analyzer");
  }

  return (
    <div className="container">
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <header>MyATS</header>
          <div className="label-input">
            <label htmlFor="uname">
              <b>Email</b>
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email"
              name="uname"
              required
            />
          </div>
          <br />
          <div className="label-input">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter Username"
              name="uname"
              required
            />
          </div>
          <br />
          <div className="label-input">
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="psw"
              required
            />
          </div>

          <div>
            <p
              style={{
                display: "flex",
                justifyContent: "end",
                margin: "0",
              }}
            >
              Forgot password?
            </p>
          </div>
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already a member? <a href="/login">Login now!</a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
