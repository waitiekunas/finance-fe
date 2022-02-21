import { all } from 'redux-saga/effects';

import { appSagas } from './sagas/app.sagas';

export default function* rootSaga(): Generator {
  yield all([appSagas()]);
}
