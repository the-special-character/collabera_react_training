import { all, fork, takeEvery } from 'redux-saga/effects';
import apiGenerator from '../utils/apiGenerator';

function* loadProductsRequest() {
  yield takeEvery('LOAD_PRODUCTS_REQUEST', apiGenerator);
}

export default function* rootProductsSaga() {
  yield all([fork(loadProductsRequest)]);
}
