import TubeLines from "../components/TubeLines";
import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import { act } from "react";
import { Popover } from "@mui/material";

jest.mock("../utils/router", () => ({
  useNavigate: (v) => console.log("Routing to" + v),
}));

jest.mock("axios");

describe("TubeLines", () => {
  // beforeEach(async () => {
  //   const tubeData = { data: "tubeLinesData" };
  //   (axios.get as jest.Mock).mockResolvedValue(tubeData);
  //   await act(async () => {
      render(
          <TubeLines />
      );
    // });
  // });

  it("has a title", () => {
    const title = screen.getByText("Tube Lines");
    expect(title).toBeInTheDocument();
  });

  it("does a GET to fetch the data", async () => {
    expect(screen.getByText("tubeLinesData")).toBeInTheDocument();
  });

  it("it displays the popover when the button is clicked ", () => {
    // Render the component
    render(<Popover open={false} />);

    const openPopover = screen.getByText("open");
    fireEvent.click(openPopover);

    const closePopover = screen.getByText("handleclose");
    fireEvent.click(closePopover);

    expect(screen.getByText("lineInfo")).toBeInTheDocument();
  });

  it("shows information about the status when is not good service", () => {});
});
