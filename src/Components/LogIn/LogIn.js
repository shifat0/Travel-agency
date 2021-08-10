import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import NavbarBlack from "../Navbar/NavbarBlack";
import "./LogIn.css";
import facebook from "../../images/fb.png";
import google from "../../images/google.png";
import { signInWithEmailAndPassword } from "../Firebase/WithEmail";

const LogIn = () => {
  const [user, setUser] = useState({
    signedIn: false,
    email: "",
    password: "",
    error: "",
    success: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    signInWithEmailAndPassword(user.email, user.password).then((payload) =>
      setUser(payload)
    );
  };

  const handleBlur = (e) => {
    let isFormValid = true;

    if (e.target.name === "email") {
      isFormValid = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(
        e.target.value
      );
    }
    if (e.target.name === "password") {
      isFormValid = /\d{1}/.test(e.target.value);
    }

    if (isFormValid) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  };

  return (
    <div className="container">
      <NavbarBlack />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          {(user.error && <span className="error">{user.error}</span>) ||
            (user.success && <span>Logged in succesfully</span>)}
          <h3>Login</h3>
          <input
            placeholder="Username or Email"
            {...register("email", {
              required: { value: true, message: "Email is requied" },
              // Pattern for username or password
              // pattern:
              //   /^(?=[a-z0-9.]{3,20}$)[a-z0-9]+\.?[a-z0-9]+$|^.*@\w+\.[\w.]+$/i,
            })}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.message}</span>}
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Passwprd is requied" },
              pattern: { value: /\d{1}/, message: "Password do not match" },
            })}
            onBlur={handleBlur}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
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
