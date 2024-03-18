import React, { useState } from "react";
import "../Styles/LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (
      username === "" ||
      password === "" ||
      (isRegistered && userType === "")
    ) {
      alert("Please fill in all fields");
      return;
    }
    // Perform login logic here
    alert("Login logic goes here");
  };
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    if (username === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Perform registration logic here
    setIsRegistered(true);
    setShowRegistration(false); // Hide registration form after successful registration
    alert("Registration logic goes here");
  };

  const toggleRegistrationForm = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div className="container">
      {isPasswordReset ? (
        <div>
          <p>Password reset instructions sent to your email.</p>
          <button onClick={() => setIsPasswordReset(false)}>
            Back to Login
          </button>
        </div>
      ) : isRegistered ? (
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <label>
            User Type:
            <select value={userType} onChange={handleUserTypeChange}>
              <option value="">Select User Type</option>
              <option value="admin">Admin</option>
              <option value="vendor">Vendor</option>
              <option value="user">User</option>
            </select>
          </label>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <form
            onSubmit={
              showRegistration ? handleRegistrationSubmit : handleLoginSubmit
            }
          >
            <h2>{showRegistration ? "Register" : "Login"}</h2>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <br />
            {showRegistration && (
              <>
                <label>
                  Confirm Password:
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </label>
                <br />
              </>
            )}
            {!showRegistration && (
              <label>
                User Type:
                <select value={userType} onChange={handleUserTypeChange}>
                  <option value="">Select User Type</option>
                  <option value="admin">Admin</option>
                  <option value="vendor">Vendor</option>
                  <option value="user">User</option>
                </select>
              </label>
            )}
            <button type="submit">
              {showRegistration ? "Register" : "Login"}
            </button>
            <br />
            <br />

            {!showRegistration && (
              <p>
                If you don't have an account,{" "}
                <button onClick={toggleRegistrationForm}>register here</button>
              </p>
            )}
            {showRegistration && (
              <button type="button" onClick={toggleRegistrationForm}>
                Back to Login
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
