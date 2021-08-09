import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import NavbarBlack from "../Navbar/NavbarBlack";
import "./LogIn.css";
import facebook from "../../images/fb.png";
import google from "../../images/google.png";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <NavbarBlack />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h3>Login</h3>
          <input
            placeholder="Username or Email"
            {...register("email", {
              required: true,
              // pattern: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,
              pattern:
                /^(?=[a-z0-9.]{3,20}$)[a-z0-9]+\.?[a-z0-9]+$|^.*@\w+\.[\w.]+$/i,
            })}
          />
          {errors.email && (
            <span className="error">{errors.message}This feild is requied</span>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern: /\d{1}/,
              minLength: 6,
              maxLength: 16,
            })}
          />
          {errors.password && (
            <span className="error">This feild is requied</span>
          )}
          <div className="forget-password">
            <div className="checkbox">
              <input type="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <span>Forgot Password</span>
          </div>
          <input type="submit" value="Log in" className="submit" />
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              <span>Create an account</span>
            </Link>
          </p>
        </form>
        <p className="fancy">
          <span>Or</span>
        </p>
        <div className="other-accounts">
          <img src={facebook} alt="facebook" />
          <span>Continue with Facebook</span>
        </div>
        <div className="other-accounts">
          <img src={google} alt="google" />
          <span>Continue with Google</span>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
