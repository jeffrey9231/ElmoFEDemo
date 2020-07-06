import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

// create redux actions
export const fetchUserAccount = createAction<SearchQuery>(Actions.FETCH_USER_ACCOUNT);
export const fetchUserAccountDetail = createAction<SearchQuery>(Actions.FETCH_USER_ACCOUNT_DETAIL);

export const fetchUserAccountSuccess = createAction<UserAccountDetails[]>(Actions.FETCH_USER_ACCOUNT_SUCCESS);
export const fetchUserAccountDetailSuccess = createAction<UserAccountDetails[]>(Actions.FETCH_USER_ACCOUNT_DETAIL_SUCCESS);

