import { act, fireEvent, render, screen } from "@testing-library/react";
import Journey from "../components/Journey";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");

describe("Journey", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Journey />
      </MemoryRouter>
    );
  });

  it("renders journey", () => {
    const fromLocation = screen.getByText("from");
    const toLocation = screen.getByText("to");
    expect(fromLocation).toBeInTheDocument();
    expect(toLocation).toBeInTheDocument();
  });

  it("does a GET when register button is clicked", async () => {
    await act(async () =>
      fireEvent.click(screen.getByRole("button", { name: /plan/ }))
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
