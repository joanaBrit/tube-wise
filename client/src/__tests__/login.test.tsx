import axios from "axios";
import Login from "../components/Login";
import {
  act,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

jest.mock("../utils/router", () => ({
  useNavigate: (v) => console.log("Routing to " + v),
}));

jest.mock("axios");

describe("Login", () => {
  beforeEach(() => {
    render(<Login />);
  });

  it("renders login form", () => {
    const usernameOrEmail = screen.getByLabelText(/username or email/i);
    const password = screen.getByLabelText(/password/i);
    expect(usernameOrEmail).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it("does a POST when login button is clicked", async () => {
    await act(async () =>
      fireEvent(
        screen.getByRole("button", { name: "Login" }),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      )
    );
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
