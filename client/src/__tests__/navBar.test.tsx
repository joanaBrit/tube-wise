import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import { pages } from "../components/NavBar";
import { render, screen } from "@testing-library/react";

describe("NavBar", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });
});

it("renders all pages", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
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
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const logo = screen.getByAltText(/Tube London Logo/);
  expect(logo).toBeInTheDocument();
});

it("has a title", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const title = screen.getByText("Tube Wise");
  expect(title).toBeInTheDocument();
});
