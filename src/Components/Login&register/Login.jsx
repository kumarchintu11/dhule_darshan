import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [visible, setvisible] = useState();
  const [formContainerActive, setFormContainerActive] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // You can send the login or signup data to your backend for validation here

    console.log("Password:", password);

    // Reset the form fields after submission
    setEmail("");
    setPassword("");
  };

  const toggleForm = () => {
    setFormContainerActive(!formContainerActive);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    console.log(res);
  };
  return (
    <div className="App">
      {/* Header */}
      <header className="center">
        <nav className="nav">
          {visible ? (
            <div>
              <h1 style={{ fontSize: "4vw" }}>Dhule Darshan</h1>
            </div>
          ) : (
            <div></div>
          )}
          <a href="hotel.html" class="nav_link">
            Hotel
          </a>
          <a href="fort.html" class="nav_link">
            Fort
          </a>
          <a href="attraction.html" class="nav_link">
            Attractions
          </a>
          <a href="food.html" class="nav_link">
            Food
          </a>
          <a href="con1.html" class="nav_link">
            Contact
          </a>

          <button id="form-open" className="button" onClick={toggleForm}>
            {isLogin ? "Login" : "Signup"}
          </button>
        </nav>
      </header>

      {/* Home */}
      <section className={`home ${formContainerActive ? "show" : ""}`}>
        <div className="form_container">
          <i className="uil uil-times form_close" onClick={toggleForm}></i>

          {/* Login or Signup Form */}
          <div className="form">
            <div
              className="mydiv"
              style={{
                width: "100%",
                alignContent: "flex-end",
                backgroundColor: "red",
              }}
            >
              <button
                onClick={toggleForm}
                style={{ color: "red", fontSize: 16 }}
              >
                X
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <h2>{isLogin ? "Login" : "Signup"}</h2>
              <div className="input_box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
                <i className="uil uil-envelope-alt email"></i>
              </div>
              <div className="input_box">
                <input
                  type="password"
                  placeholder={
                    isLogin ? "Enter your password" : "Create password"
                  }
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>

              {/* Additional form fields for signup */}
              {!isLogin && (
                <div className="input_box">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <i className="uil uil-lock password"></i>
                  <i className="uil uil-eye-slash pw_hide"></i>
                </div>
              )}

              <button
                className="button LoginBtn"
                type="submit"
                onClick={(e) => handleLoginSubmit(e)}
              >
                {isLogin ? "Login Now" : "Signup Now"}
              </button>

              <div className="option_field">{/* ... (unchanged code) */}</div>

              <div className="login_signup">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button type="button" onClick={toggleForm}>
                  {isLogin ? "Signup" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ... (unchanged code) */}
    </div>
  );
}

export default Login;
