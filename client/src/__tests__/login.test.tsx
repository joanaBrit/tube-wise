import Login from "../components/Login";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

jest.mock("../utils/router", () => ({
  useNavigate: (v) => console.log("Routing to " + v),
}));

describe("Login", () => {
  render(<Login />);
  it("renders login form", () => {
    const username = screen.getByRole("textbox", { name: "username" });
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByRole("password", { name: "password" });
    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    it("submits the form with username or email and password", () => {
      const submitLogin = screen.getByText(
        "username" || ("email" && "password")
      );
      expect(submitLogin).toBeInTheDocument();
    });
  });
});
