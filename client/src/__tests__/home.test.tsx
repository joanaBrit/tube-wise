import Home from "../components/Home";
import { screen, render } from "@testing-library/react";

describe("Home", () => {
  beforeEach(() => render(<Home />));

  it("has main title", () => {
    const title = screen.getByTestId("main-title");
    expect(title).toBeInTheDocument();
  });

  it("has a body text", () => {
    const text = screen.getByTestId("body-text");
    expect(text).toBeInTheDocument();
  });
});
