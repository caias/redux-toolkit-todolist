/**
 * redux toolkit configure store example
 *
 * combine reducer를 통한 reducer 합치기
 */
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const env = process.env.NODE_ENV || 'development';

export default function appStore(reducers = {}, preloadedState = {}) {
  const appReducer = combineReducers(reducers);

  return configureStore({
    reducer: appReducer,
    preloadedState,
    devTools: env !== 'production',
    middleware: getDefaultMiddleware({
      // rejectWithValue시 err 매개변수를 직접 넣기 위한 설정.
      serializableCheck: false,
    }),
  });
}
