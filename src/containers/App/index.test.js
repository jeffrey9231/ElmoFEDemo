import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { App } from "./index.tsx";

function renderTestTarget(historyMock) {
  return render(<App history={historyMock} />);
}

describe("renders App", () => {
  it("should render", () => {
    const { getByText } = renderTestTarget();

    expect(getByText(/Go to search page/i)).toBeInTheDocument();
  });

  it("should go to /search page when click the button", () => {
    const historyMock = { push: jest.fn() };
    const { getByText } = renderTestTarget(historyMock);

    fireEvent.click(getByText(/Go to search page/i));
    expect(historyMock.push.mock.calls[0]).toEqual(["/search"]);
  });
});
