import NavBar from "../components/NavBar";
import { pages } from "../components/NavBar";
import { render, screen } from "@testing-library/react";

describe("NavBar", () => {
  it("renders without crashing", () => {
    render(<NavBar />);
  });

  it("renders all pages", () => {
    pages.forEach((page) => {
      expect(screen.getByLabelText(page.label)).toBeInTheDocument();
    });
  });

  it("renders all navigation buttons", () => {
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Map")).toBeInTheDocument();
    expect(screen.getByText("Journey")).toBeInTheDocument();
    expect(screen.getByText("Lines")).toBeInTheDocument();
  });

  it("has a logo", () => {
    const logo = screen.getByAltText(/Tube London Logo/);
    expect(logo).toBeInTheDocument();
  });

  it("has a title", () => {
    const title = screen.getByText("Tube Wise");
    expect(title).toBeInTheDocument();
  });
});
