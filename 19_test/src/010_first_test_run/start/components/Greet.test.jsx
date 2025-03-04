import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it("should hava h1 tag", () => {
  render(<Greet />);
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();
});

// test("if h1 tag exists", () => {
//   render(<Greet />);
//   const h1El = screen.getByText("こんばんは");
//   expect(h1El).toBeInTheDocument();
// });
