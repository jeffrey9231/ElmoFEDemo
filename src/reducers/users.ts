import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: UsersStoreState = [];

export default handleActions<UsersStoreState, UserAccountDetails[]>({
  [Actions.FETCH_USER_ACCOUNT_SUCCESS]: (state, action) => {
    return [...action.payload];
  },

  [Actions.FETCH_USER_ACCOUNT_DETAIL_SUCCESS]: (state, action) => {
    return [...action.payload];
  },
}, initialState);
