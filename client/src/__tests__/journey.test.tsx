import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Journey from "../components/Journey";
import axios from "axios";
import { NAPTAN_IDS } from "../constants";

jest.mock("axios");
jest.mock("../utils/auth", () => {
  return {
    isLoggedIn: () => {
      return true;
    },
  };
});

describe("Journey", () => {
  beforeEach(() => {
    render(<Journey />);
  });

  it("has a title", () => {
    const title = screen.getByText("Plan your journey");
    expect(title).toBeInTheDocument();
  });

  it("renders journey options", () => {
    const fromLocation = screen.getByText("From");
    const toLocation = screen.getByText("To");
    expect(fromLocation).toBeInTheDocument();
    expect(toLocation).toBeInTheDocument();
  });

  it("does not do a GET when plan is clicked if from and to not selected", async () => {
    await act(async () =>
      fireEvent.click(screen.getByRole("button", { name: /Plan/ }))
    );
    expect(axios.get).toHaveBeenCalledTimes(0);
  });

  it("does a GET when plan is clicked if from and to selected", async () => {
    const from = screen.getByRole("combobox", { name: "From" });
    const to = screen.getByRole("combobox", { name: "To" });
    expect(from).toBeInTheDocument();
    expect(to).toBeInTheDocument();

    const selectOption = async (element, option) => {
      await act(() => userEvent.click(element));
      const o = await screen.findByText(option);
      await act(() => userEvent.click(o));
    };

    await selectOption(from, "Baker Street Underground Station");
    await selectOption(to, "Charing Cross Underground Station");

    await act(() =>
      fireEvent.click(screen.getByRole("button", { name: /Plan/ }))
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("displays all tube station options", async () => {
    const stations = NAPTAN_IDS.map(entry =>entry.commonName)
    const dropdown =screen.getByRole("combobox", { name: "From" });
    
    await act(()=>userEvent.click(dropdown))
    //map through all station names
    stations.forEach(station => {expect(screen.getByText(station)).toBeInTheDocument()})
  });
});
