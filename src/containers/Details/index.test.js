import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "../../reducers";
import { initialState } from "../../reducers/users";
import { Details } from "./index.tsx";

function renderTestTarget(state = initialState) {
  const store = createStore(reducer, state);
  return render(
    <Provider store={store}>
      <Details
        actions={{ fetchUserAccountDetail: jest.fn() }}
        match={{ params: jest.fn() }}
        users={state}
      />
    </Provider>
  );
}

describe("renders Details", () => {
  it("should render", () => {
    const { getByText } = renderTestTarget();
    expect(getByText(/Go back/i)).toBeInTheDocument();
    expect(getByText(/Name/i)).toBeInTheDocument();
  });

  it("should render correct value from state", () => {
    const state = [
      {
        id: "mockId",
        name: "mockName",
        screen_name: "mockScreenName",
        profile_image_url: "mockImg",
        followers_count: "mockCount",
      },
    ];
    const { getByText } = renderTestTarget(state);

    expect(getByText(/mockName/i)).toBeInTheDocument();
    expect(getByText(/mockCount/i)).toBeInTheDocument();
  });
});
