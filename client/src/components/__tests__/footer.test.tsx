import Footer from "../Footer";
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'

test("Footer", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Footer content/i);
  expect(linkElement).toBeInTheDocument();
});
