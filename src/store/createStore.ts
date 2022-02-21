import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import allReducers from './reducers';
import rootSaga from './rootSaga';

const isDevelopment = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: allReducers,
  middleware: [sagaMiddleware],
  devTools: isDevelopment,
});

sagaMiddleware.run(rootSaga);

// eslint-disable-next-line no-unused-vars
export default store;
