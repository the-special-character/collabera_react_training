import { call, put } from 'redux-saga/effects';
import axiosInstance from './axiosInstance';

function* apiGenerator({ type, payload, meta }) {
  const match = /(.*)_(REQUEST)/.exec(type);
  const [, actionName] = match;
  try {
    const res = yield call(axiosInstance, payload);
    yield put({
      type: `${actionName}_SUCCESS`,
      payload: actionName === 'DELETE_CART' ? payload.data : res,
      meta,
    });
  } catch (error) {
    console.log('api error', error.message);
    yield put({ type: `${actionName}_FAIL`, payload: error, meta });
  }
}

export default apiGenerator;
