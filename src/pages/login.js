import React, { useState, useEffect } from "react";
import { auth, provider } from "../services/config";
import { signInWithPopup } from "firebase/auth";
import "../assets/scss/LoginPage.scss";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";

function Login() {
  const [value, setValue] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, [value]);

  return (
    <div>
      {value ? (
        <Dashboard />
      ) : (
        <div className="auth-container">
          <div className="left-container">
            <h1 className="h1">Welcome to MoCal!</h1>
            <p>Get Your First Month Free. Sign Up Now!</p>
          </div>
          <div className="auth-grid">
            <div className="auth-form">
              <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
              <form>
                {isLogin ? (
                  <>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                  </>
                ) : (
                  <input type="email" placeholder="Email" />
                )}
                <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
              </form>
              <p>
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <span onClick={toggleForm}>
                  {isLogin ? "Sign Up" : "Log In"}
                </span>
              </p>
            </div>
            <div className="auth-options">
              <button className="google-btn" onClick={handleClick}>
                Sign In with Google
              </button>
              <button className="microsoft-btn">Sign In with Microsoft</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
