// Test away!
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";

import Controls from "./Controls";

describe("The Controls Component", () => {
  it("provides button to toggle locked state", () => {
    const mockLock = jest.fn();
    const { getByText } = render(
      <Controls
        closed
        toggleLocked={mockLock}
      />
    );
    const lockButton = getByText(/lock gate/i);
    fireEvent.click(lockButton);
    expect(mockLock).toHaveBeenCalled();
    cleanup();
  });
  it('provides button to toggle closed state', () => {
    const mockClose = jest.fn();
    const { getByText } = render(<Controls toggleClosed={mockClose} />)
    const closeButton = getByText(/close gate/i);
    fireEvent.click(closeButton);
    expect(mockClose).toHaveBeenCalled();
  })
});
