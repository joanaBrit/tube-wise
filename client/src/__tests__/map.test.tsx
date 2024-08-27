import Map from "../components/Map";
import { act, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const useControlsMocks = {
  zoomIn: jest.fn(),
  zoomOut: jest.fn(),
  resetTransform: jest.fn(),
};

jest.mock("react-zoom-pan-pinch", () => ({
  ...jest.requireActual("react-zoom-pan-pinch"),
  useControls: () => useControlsMocks,
}));

describe("Map", () => {
  beforeEach(() => {
    render(<Map />);
  });

  it("has a title", () => {
    const title = screen.getByText("Map");
    expect(title).toBeInTheDocument();
  });

  it("renders map image", () => {
    const image = screen.getByAltText("Tube lines map");
    expect(image).toHaveAttribute("src", "/assets/tubeMap2024.png");
  });

  it("displays controls", () => {
    const zoomInButton = screen.getByRole("button", { name: /zoom in/i });
    const zoomOutButton = screen.getByRole("button", { name: /zoom out/i });
    const resetButton = screen.getByRole("button", { name: /reset zoom/i });
    expect(zoomInButton).toBeInTheDocument();
    expect(zoomOutButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  it("increases zoom when clicking the 'zoom in' button ", async () => {
    const zoomInBtn = screen.getByRole("button", { name: /zoom in/i });
    // Simulate a click event
    await act(() => userEvent.click(zoomInBtn));
    expect(useControlsMocks.zoomIn).toHaveBeenCalledTimes(1);
  });

  it("decreases zoom when clicking the 'zoom out' button", async () => {
    // Because we need to zoom in first to ensure we can zoom out
    const zoomInBtn = screen.getByRole("button", { name: /zoom in/i });
    await act(() => userEvent.click(zoomInBtn));
    // Zoom out click button
    const zoomOutBtn = screen.getByRole("button", { name: /zoom out/i });
    await act(() => userEvent.click(zoomOutBtn));
    expect(useControlsMocks.zoomOut).toHaveBeenCalledTimes(1);
  });

  it("go to initial image size when clicking 'reset' button", async () => {
    const resetBtn = screen.getByRole("button", { name: /reset zoom/i });
    await act(() => userEvent.click(resetBtn));
    expect(useControlsMocks.resetTransform).toHaveBeenCalledTimes(1);
  });
});
