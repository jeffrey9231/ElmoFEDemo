import { combineReducers, Reducer } from "redux";

import users from "./users";

export interface RootState {
  users: UsersStoreState;
}

export default combineReducers<RootState>({
  users,
});
