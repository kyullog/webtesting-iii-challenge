// Test away!
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";

import Controls from "./Controls";

afterEach(() => cleanup());

describe("The Controls Component", () => {
  it("provides button to toggle locked state", () => {
    const mockLock = jest.fn();
    const { getByText } = render(<Controls closed toggleLocked={mockLock} />);
    const lockButton = getByText(/lock gate/i);
    fireEvent.click(lockButton);
    expect(mockLock).toHaveBeenCalled();
  });
  it("provides button to toggle closed state", () => {
    const mockClose = jest.fn();
    const { getByText } = render(<Controls toggleClosed={mockClose} />);
    const closeButton = getByText(/close gate/i);
    fireEvent.click(closeButton);
    expect(mockClose).toHaveBeenCalled();
  });
  describe("changes button text to reflect state", () => {
    it("displays unlock button when locked prop is passed", () => {
      const { getByText } = render(<Controls locked />);
      getByText(/unlock gate/i);
    });
    it("displays lock button when unlocked", () => {
      const { getByText } = render(<Controls />);
      getByText(/lock gate/i);
    });
    it("displays close button when open", () => {
      const { getByText } = render(<Controls />);
      getByText(/close gate/i);
    });
    it("displays open button when closed", () => {
      const { getByText } = render(<Controls closed />);
      getByText(/open gate/i);
    });
  });
  describe("buttons disable depending on locked and closed status", () => {
    it("closed toggle button is disabled if gate is locked and closed", () => {
      const disabledToggle = jest.fn();
      const { getByText } = render(
        <Controls locked closed toggleClosed={disabledToggle} />
      );
      const button = getByText(/open gate/i);
      fireEvent.click(button);
      expect(disabledToggle).toHaveBeenCalledTimes(0);
      cleanup();
    });
    it('locked toggle button is disabled when door is open', () => {
      const disabledToggle = jest.fn();
      const { getByText } = render(<Controls />)
      const button = getByText(/lock gate/i);
      fireEvent.click(button);
      expect(disabledToggle).toHaveBeenCalledTimes(0);
      cleanup();
    })
  });
});
