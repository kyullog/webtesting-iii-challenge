// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";

import Display from "./Display";

describe("the Display component", () => {
  it('displays "closed" if the closed prop is true', () => {
    const { getByText } = render(<Display closed />);
    getByText(/Closed/i);
    cleanup();
  });

  it('displays "open" if closed prop is not defined', () => {
    const { getByText } = render(<Display />);
    getByText(/Open/i);
    cleanup();
  });

  describe("when locked or closed, uses red-led class", () => {
    it("when locked", () => {
      const { getByText } = render(<Display locked />);
      const locked = getByText(/Locked/i);
      expect(locked.className).toEqual("led red-led");
      cleanup();
    });

    it("when closed", () => {
      const { getByText } = render(<Display closed />);
      const closed = getByText(/Closed/i);
      expect(closed.className).toEqual("led red-led");
      cleanup();
    });
  });

  describe("when unlocked or open, uses green-led class", () => {
    it("when unlocked", () => {
      const { getByText } = render(<Display />);
      const unlocked = getByText(/Unlocked/i);
      expect(unlocked.className).toEqual("led green-led");
    });

    it('when open', () => {
      const {getByText} = render(<Display />);
      const open = getByText(/Open/i);
      expect(open.className).toEqual('led green-led');
    })
  });
});
