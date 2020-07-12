import { call, put, takeEvery } from "redux-saga/effects";

import * as FetchActions from "../actions";
import * as Actions from "../constants/actions";
import API from "./api";

export function* fetchUserAccountWorker(action) {
  try {
    const { payload } = action;
    // send request to backend /search when there has search query
    if (payload.searchQuery) {
      const data = yield call(API.searchUserAccount, payload.searchQuery);
      yield put(FetchActions.fetchUserAccountSuccess(data));
    } else {
      // reset searchQuery value in store
      yield put(FetchActions.fetchUserAccountSuccess([]));
    }
  } catch (e) {}
}

export function* fetchUserAccountDetailsWorker(action) {
  try {
    const { payload } = action;
    // send request to backend /details
    const data = yield call(API.showUserAccount, payload.searchQuery);
    yield put(FetchActions.fetchUserAccountDetailSuccess([data]));
  } catch (e) {}
}

export function* fetchWatcher() {
  yield takeEvery(Actions.FETCH_USER_ACCOUNT, fetchUserAccountWorker);
  yield takeEvery(
    Actions.FETCH_USER_ACCOUNT_DETAIL,
    fetchUserAccountDetailsWorker
  );
}

export default fetchWatcher;
