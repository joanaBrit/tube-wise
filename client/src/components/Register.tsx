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
      onSubmit={register}
      fields={fields}
      redirect="/login"
      processResponse={() => {}}
    />
  );
};

export default Register;
