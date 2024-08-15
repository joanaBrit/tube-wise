import { act, fireEvent, render, screen } from "@testing-library/react";
import Register from "../components/Register";
import axios from "axios";

jest.mock("../utils/router", () => ({
  useNavigate: (v) => console.log("Routing to" + v),
}));

jest.mock("axios");

describe("Register", () => {
  beforeEach(() => {
    render(<Register />);

  });

  it("renders register form", () => {
    const username = screen.getByLabelText(/Username/i);
    const email = screen.getByLabelText(/Email/i);
    const password = screen.getAllByText("Password")[0];
    const passwordConfirmation = screen.getByLabelText(
      /Password Confirmation/i
    );
    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(passwordConfirmation).toBeInTheDocument();
  });
  it("does a POST when register button is clicked", async () => {
    await act(async () =>
      fireEvent(
        screen.getByRole("button", { name: "Register" }),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      ));
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
