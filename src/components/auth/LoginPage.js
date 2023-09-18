import React, { useState } from "react";
import "../../assets/scss/LoginPage.scss";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
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
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={toggleForm}>{isLogin ? "Sign Up" : "Log In"}</span>
          </p>
        </div>
        <div className="auth-options">
          <button className="google-btn">Sign In with Google</button>
          <button className="microsoft-btn">Sign In with Microsoft</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
