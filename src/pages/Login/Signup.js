import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../UserContextProvider";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./login.css";

function Signup() {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().min(4).max(10).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  return (
    <div className="Signup">
      <form
        className="Signup_form"
        onSubmit={handleSubmit((user) => {
          setUser(user);
          navigate("/login ");
        })}
      >
        <input
          className="Signup_email"
          {...register("email", {
            required: { value: true, message: "This is Required" },
          })}
          placeholder="Email"
        />
        <div className="error_msg"></div>
        <input
          className="Signup_username"
          {...register("username", {
            required: { value: true, message: "This is Required" },
          })}
          placeholder="Username"
        />
        <div className="error_msg"></div>
        <input
          className="Signup_password"
          {...register("password", {
            required: { value: 5, message: "This is Required" },
          })}
          type="password"
          placeholder="Password"
        />
        {/* <div className="error_msg">{formErrors.password}</div> */}
        <button className="Signup_button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Signup;
