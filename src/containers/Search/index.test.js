import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "../../reducers";
import { initialState } from "../../reducers/users";
import { Search } from "./index.tsx";

function renderTestTarget(state = initialState, historyMock = jest.fn()) {
  const store = createStore(reducer, state);
  return render(
    <Provider store={store}>
      <Search
        history={historyMock}
        actions={{ fetchUserAccount: jest.fn() }}
        users={state}
      />
    </Provider>
  );
}

describe("renders Search", () => {
  it("should render", () => {
    const { getByText } = renderTestTarget();
    expect(getByText(/Search/i)).toBeInTheDocument();
  });

  it("should go to /details/:id page when click Search button", () => {
    const historyMock = { push: jest.fn() };
    const state = [
      {
        id: "mockId",
        name: "mockName",
        screen_name: "mockScreenName",
        profile_image_url: "mockImg",
        followers_count: "mockCount",
      },
    ];
    const { getByText } = renderTestTarget(state, historyMock);

    fireEvent.click(getByText(/mockName/i));
    expect(historyMock.push.mock.calls[0]).toEqual(["/details/mockId"]);
  });
});
