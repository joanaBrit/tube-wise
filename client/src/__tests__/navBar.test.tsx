import NavBar from "../components/NavBar";
import { pages } from "../components/NavBar";
import { cleanup, render, screen } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  Link: (props: { to; children }) => (
    <a href={props.to.pathname}>{props.children}</a>
  ),
}));

describe("NavBar", () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  afterEach(() => cleanup());

  it("renders without crashing", () => {
    screen.debug();
  });

  it("renders all page links", () => {
    pages.forEach((page) => {
      expect(
        screen.getByRole("link", { name: page.label })
      ).toBeInTheDocument();
    });
  });

  it("has a logo", () => {
    const logo = screen.getByAltText(/Tube London Logo/);
    expect(logo).toBeInTheDocument();
  });

  // it("has a title", () => {
  //   const title = screen.getByText("Tube Wise");
  //   expect(title).toBeInTheDocument();
  // });

  // it("has a visible title", () => {
  //   // unluck the elements that are not visible
  //   const title = screen.getByText("Tube Wise", { hidden: false });
  //   expect(title).toBeVisible();
  // });
// Not the best practice
  it("has a title", () => {
    const titles = screen.getAllByText("Tube Wise");
    expect(titles[0]).toBeInTheDocument();
  });
});
