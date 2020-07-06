import { call, put, takeEvery } from 'redux-saga/effects';
import * as FetchActions from '../actions';
import * as Actions from '../constants/actions';
import API from './api';


  export function* fetchUserAccountWorker(action) {
    try {
      const { payload } = action;
      // send request to backend /search when there has search query
      if(payload.searchQuery){
        //   const response = yield call(API.searchUserAccount, payload.searchQuery);

        //   yield put(FetchActions.fetchUserAccountSuccess(response.data));
        yield put(FetchActions.fetchUserAccountSuccess([{
            id: 'string;',
            name: 'string;',
            screen_name: 'string;',
            profile_image_url: 'string;',
            followers_count: 11,
        }]));
      }else{
        // reset searchQuery value in store
        yield put(FetchActions.fetchUserAccountSuccess([]));
      }
    } catch (e) {}
  }

  export function* fetchUserAccountDetailsWorker(action) {
    try {
      const { payload } = action;
      // send request to backend /details
    //   const response = yield call(API.showUserAccount, payload.searchQuery);

    //   yield put(FetchActions.fetchUserAccountDetailSuccess(response.data));
    yield put(FetchActions.fetchUserAccountSuccess([{
        id: '11;',
        name: '22;',
        screen_name: '22;',
        profile_image_url: '22;',
        followers_count: 121,
      }]));

    } catch (e) {}
  }

  export function* fetchWatcher() {
    yield takeEvery(Actions.FETCH_USER_ACCOUNT, fetchUserAccountWorker);
    yield takeEvery(Actions.FETCH_USER_ACCOUNT_DETAIL, fetchUserAccountDetailsWorker);
  }
  
  export default fetchWatcher;