import Form from "./Form";
import axios from "axios";
import { API_ROOT } from "../constants";
import React, { FunctionComponent, useState } from "react";
import { setToken } from "../utils/Auth";
import { LoginResponse } from "../../../common/types";

// import FormLayout from './FormLayout'

// interface LoginProps {
//   onLogin: (
//     username: string,
//     password: string,
//   ) => void
// }

const Login: FunctionComponent = () => {
  const fields = [
    {
      type: "text",
      name: "username",
      label: "Username or Email",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
    },
  ];

  function login(formData) {
    return axios.post(API_ROOT + "/login", formData);
  }

  return (
    <Form
      title="Login"
      request={login}
      fields={fields}
      redirect="/tube"
      processResponse={processResponse}
    />
  );

  function processResponse(data: LoginResponse) {
    if (data.token) {
      const tokenName = "userID";
      setToken(tokenName, data.token);
      localStorage.setItem("logged_user", JSON.stringify(true));
    }
  }
};

export default Login;
