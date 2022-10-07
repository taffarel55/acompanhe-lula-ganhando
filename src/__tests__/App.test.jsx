import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Render test", () => {
  test("Should render app", () => {
    render(<App />);
    const button = screen.getByText(/Obter dados/i);
    expect(button).toBeDefined();
  });
});
