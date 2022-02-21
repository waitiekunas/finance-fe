import { all, put, takeLatest } from 'redux-saga/effects';

import { loadedAppAction, loadedAppActionTest } from '../actions/app.actions';

export function* testSaga() {
  yield put(loadedAppAction(true));
}

export function* appSagas() {
  yield all([takeLatest(loadedAppActionTest, testSaga)]);
}
