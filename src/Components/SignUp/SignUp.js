import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import NavbarBlack from "../Navbar/NavbarBlack";
import "./SignUp.css";
import facebook from "../../images/fb.png";
import google from "../../images/google.png";
import { createUserWithEmailAndPassword } from "../Firebase/WithEmail";

const SignUp = () => {
  const [newUser, setNewUser] = useState(true);
  const [user, setUser] = useState({
    signedIn: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
    success: "",
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.email, user.password).then(
        (payload) => setUser(payload)
      );
    }
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
      <div className="sign-up-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          {(user.error && <span className="error">{user.error}</span>) ||
            (user.success && <span>Signed up succesfully</span>)}
          <h3>Create an account</h3>
          <input
            placeholder="First Name"
            {...register("firstName", {
              required: true,
              pattern: /^[a-zA-A]+$/i,
            })}
            onBlur={handleBlur}
          />
          {errors.firstName && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Last Name"
            {...register("lastName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            onBlur={handleBlur}
          />
          {errors.lastName && (
            <span className="error">This feild is requied</span>
          )}

          <input
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,
                message: "Enter a valid email address",
              },
            })}
            onBlur={handleBlur}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /\d{1}/,
                message: "Use at least one number as password",
              },
              minLength: {
                value: 6,
                message: "Password must contain minimum 6 charachters",
              },
              maxLength: {
                value: 16,
                message: "Password must contain maximum 16 charachters",
              },
            })}
            onBlur={handleBlur}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: { value: true, message: "Confirm Password required" },
              validate: (value) =>
                value === watch("password") || "Password don't match",
            })}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword.message}</span>
          )}

          <input type="submit" value="Create an account" className="submit" />
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span>Log in</span>
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

export default SignUp;
