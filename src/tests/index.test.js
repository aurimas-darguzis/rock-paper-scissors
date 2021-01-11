import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

// Due to time restrain I bumped into a probel and didn't manage to setup react
// testing library for this Next.js app

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(
      screen.getByTestId("app-header", { name: "Rock Paper Scissors" })
    ).toBeInTheDocument();
  });
});
