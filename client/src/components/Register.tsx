import { RegisterUserResponse } from "../../../common/types";
import { API_ROOT } from "../constants";
import Form from "./Form";
import axios from "axios";

const Register = () => {
  const fields = [
    {
      type: "text",
      name: "username",
      label: "Username",
    },
    {
      type: "email",
      name: "email",
      label: "Email",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
    },
    {
      type: "password",
      name: "passwordConfirmation",
      label: "Password Confirmation",
    },
  ];

  function register(formData) {
    return axios.post(API_ROOT + "/register", formData);
  }

  return (
    <Form
      title="Register"
      request={register}
      fields={fields}
      redirect="/login"
      processResponse={processResponse}
    />
  );

  function processResponse(data: RegisterUserResponse) {
    if (data.user) {
      console.log("yay");
    }
  }
};

export default Register;
