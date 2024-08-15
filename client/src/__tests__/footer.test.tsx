import Footer from "../components/Footer";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

it("has a link to the specific path", () => {
  render(<Footer />);
  const link = screen.getByRole("link", { name: "TFL Support" });

  expect(link).toBeInTheDocument();
  expect(link.getAttribute("href")).toContain("tfl.gov.uk");
});
