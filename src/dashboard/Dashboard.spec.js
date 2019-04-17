// Test away
import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup } from 'react-testing-library';
import Dashboard from "./Dashboard";

describe("The Dashboard component", () => {
  it("matches the snapshot", () => {
    const dash = renderer.create(<Dashboard />);
    expect(dash.toJSON()).toMatchSnapshot();
  });

  it("displays Controls component", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/Lock Gate/i);
    getByText(/Close Gate/i);
    cleanup();
  });

  it('displays Display component', () => {
    const { getByText } = render(<Dashboard />);
    getByText('Unlocked');
    getByText(/Open/i);
  })
});
