import Form from "./Form";
import axios from "axios";
import { API_ROOT } from "../constants";
import { FunctionComponent } from "react";
import { setToken } from "../utils/auth";
import { LoginResponse } from "../../../common/types";

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
      onSubmit={login}
      fields={fields}
      redirect="/tube"
      processResponse={processResponse}
    />
  );

  function processResponse(data: LoginResponse) {
    if (data.token) {
      const tokenName = "userToken";
      setToken(tokenName, data.token);
    }
  }
};

export default Login;
