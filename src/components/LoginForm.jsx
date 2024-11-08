import React from "react";
import './Login.css'
import { FaUserCircle  , FaLock} from "react-icons/fa";

const LoginForm = () =>{
    return(
    <div className="wrapper">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type = "text" placeholder="Username" required/>
                <FaUserCircle className="icon" />
            </div>
            <div className="input-box">
                <input type = "password" placeholder="Password" required/>
                <FaLock className="icon"/>
            </div>
            <div className="remember-forgot">
                <label><input type = "checkbox"/>Remember me</label>
                <a href="google.com">Forgot Password?</a>
            </div>
            
            <button type="submit">Login</button>

            <div className="register-link">
                <p>Don't have an account?<a href = "google.com">Register</a></p>
            </div>

        </form>

    </div>
    );
};

export default LoginForm;