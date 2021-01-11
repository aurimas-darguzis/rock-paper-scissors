import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

describe("Home", () => {
  it("renders Home component", () => {
    render(<Home />);
    expect(screen.getByTestId("app-header")).toBeInTheDocument();
  });
});
