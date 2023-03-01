/* eslint-disable */
/* @ts-nocheck */
import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import { setRequests } from './searchRequestsSlice/searchRequestsSlice';

//import Api from '...';

const axiosSearchRequests = (input) => axios.post('/api/searchRequests', { input });

const axiosFilterRequests = (input) => axios.post('/api/searchRequests/filter', { input });

const axiosFilterByPartnerRequests = (input) =>
  axios.post('/api/searchRequests/filter-partners', { input });

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchSearchRequestsOnProductName(action) {
  try {
    yield delay(900);
    const res = yield call(axiosSearchRequests, action.payload);
    yield put(setRequests(res.data));
  } catch (e) {
    yield put({ type: 'SEARCH_REQUESTS_ON_PRODUCT_NAME', message: e.message });
  }
}

function* fetchFilterRequestsOnCategoryProduct(action) {
  try {
    yield delay(900);
    const res = yield call(axiosFilterRequests, action.payload);
    yield put(setRequests(res.data));
  } catch (e) {
    yield put({ type: 'FILTER_REQUESTS_ON_CATEGORIES_PRODUCTS', message: e.message });
  }
}

function* fetchFilterRequestsByPartner(action) {
  try {
    yield delay(700);
    const res = yield call(axiosFilterByPartnerRequests, action.payload);
    yield put(setRequests(res.data));
  } catch (e) {
    yield put({ type: 'SEARCH_REQUESTS_ON_PARTNER', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export function* filterRequestsSagaWatcher() {
  yield takeLatest('FILTER_REQUESTS_ON_CATEGORIES_PRODUCTS', fetchFilterRequestsOnCategoryProduct);
}

export function* searchRequestsSagaWatcher() {
  yield takeLatest('SEARCH_REQUESTS_ON_PRODUCT_NAME', fetchSearchRequestsOnProductName);
}

export function* filterRequestsByPartnerSagaWatcher() {
  yield takeLatest('SEARCH_REQUESTS_ON_PARTNER', fetchFilterRequestsByPartner);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
// }

//export default  searchRequestsSagaWatcher ;
