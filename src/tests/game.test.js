import {
  fireEvent,
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Game from "../../pages/game";
import fetchMock from "fetch-mock";

fetchMock.config.overwriteRoutes = true;

describe("/api/rounds", () => {
  beforeEach(() => {
    render(<Game />);
  });
  it("renders Game component", () => {
    expect(screen.getByTestId("game-container")).toBeInTheDocument();
  });

  it("renders 'Player wins! when API returns Player", async () => {
    fetchMock.post("api/rounds", { winner: "Player" });
    const rockBtn = screen.getByTestId("rock-button");
    expect(rockBtn).toBeInTheDocument();

    act(() => {
      fireEvent.click(rockBtn);
    });

    await waitForElementToBeRemoved(rockBtn);
    expect(screen.getByText(/Player wins!/)).toBeInTheDocument();
  });

  it("renders 'Computer wins! when API returns Computer", async () => {
    fetchMock.post("api/rounds", { winner: "Computer" });
    const rockBtn = screen.getByTestId("rock-button");
    expect(rockBtn).toBeInTheDocument();

    act(() => {
      fireEvent.click(rockBtn);
    });

    await waitForElementToBeRemoved(rockBtn);
    expect(screen.getByText(/Computer wins!/)).toBeInTheDocument();
  });

  it("renders 'It's a draw!' when API returns Draw", async () => {
    fetchMock.post("api/rounds", { winner: "draw" });
    const rockBtn = screen.getByTestId("rock-button");
    expect(rockBtn).toBeInTheDocument();

    act(() => {
      fireEvent.click(rockBtn);
    });

    await waitForElementToBeRemoved(rockBtn);
    expect(screen.getByText(/It\'s a draw!/)).toBeInTheDocument();
  });
});
