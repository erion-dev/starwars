import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../UserContextProvider";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./login.css";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().min(4).max(10).required(),
});
function Signup() {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="Signup">
      <form
        className="Signup_form"
        onSubmit={handleSubmit((data) => {
          setUser(data);
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
        <div></div>
        <input
          className="Signup_username"
          {...register("username", {
            required: { value: true, message: "This is Required" },
          })}
          placeholder="Username"
        />
        <div></div>
        <input
          className="Signup_password"
          {...register("password", {
            required: { value: 5, message: "This is Required" },
          })}
          type="password"
          placeholder="Password"
        />
        {<div className="error_msg">{errors.password}</div>}
        <button className="Signup_button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Signup;
