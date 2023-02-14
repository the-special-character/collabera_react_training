import {
  all,
  fork,
  takeEvery,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';
import apiGenerator from '../utils/apiGenerator';

// function* loadCart({ meta }) {
//   try {
//     const res = yield call(axiosInstance.get, '660/cart');
//     yield put({ type: 'LOAD_CART_SUCCESS', payload: res, meta });
//   } catch (error) {
//     yield put({ type: 'LOAD_CART_FAIL', payload: error, meta });
//   }
// }

// function* addCart({ payload, meta }) {
//   try {
//     const res = yield call(axiosInstance.post, '660/cart', payload);
//     yield put({ type: 'ADD_CART_SUCCESS', payload: res, meta });
//   } catch (error) {
//     yield put({ type: 'ADD_CART_FAIL', payload: error, meta });
//   }
// }

// function* updateCart({ payload, meta }) {
//   try {
//     const res = yield call(
//       axiosInstance.put,
//       `660/cart/${payload.id}`,
//       payload,
//     );
//     yield put({ type: 'UPDATE_CART_SUCCESS', payload: res, meta });
//   } catch (error) {
//     yield put({ type: 'UPDATE_CART_FAIL', payload: error, meta });
//   }
// }

// function* deleteCart({ payload, meta }) {
//   try {
//     yield call(axiosInstance.delete, `660/cart/${payload.id}`);
//     yield put({ type: 'DELETE_CART_SUCCESS', payload, meta });
//   } catch (error) {
//     yield put({ type: 'DELETE_CART_FAIL', payload: error, meta });
//   }
// }

function* loadCartRequest() {
  yield takeEvery('LOAD_CART_REQUEST', apiGenerator);
}

function* addCartRequest() {
  yield takeLatest('ADD_CART_REQUEST', apiGenerator);
}

function* updateCartRequest() {
  yield takeLeading('UPDATE_CART_REQUEST', apiGenerator);
}

function* deleteCartRequest() {
  yield takeLatest('DELETE_CART_REQUEST', apiGenerator);
}

export default function* rootCartSaga() {
  yield all([
    fork(loadCartRequest),
    fork(addCartRequest),
    fork(updateCartRequest),
    fork(deleteCartRequest),
  ]);
}
