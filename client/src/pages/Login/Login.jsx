import React from "react";
import "./Login.css";
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <div className="login-form">
          <div className="login-header">
            <h3>Login Now</h3>
            <p>Enter your username and password to login</p>
          </div>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </form>
          <div className="login-buttons">
            <button type="submit" className="login-button">
              Login
            </button>
            <button type="submit" className="google-button">
              Sign in with Google
            </button>
            <p>Or</p>
            <button className="sign-up">Request for Sign Up <LoginIcon style={{color:"#fff"}}/></button>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img
          src="https://img.freepik.com/free-vector/employee-working-office-interior-workplace-flat-vector-illustration_1150-37465.jpg?w=1060&t=st=1672293887~exp=1672294487~hmac=cc024dec92706e1dc12cb499bdf5d274f88a69ec5b7d0d0a9f1c33c55ec9006d"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
