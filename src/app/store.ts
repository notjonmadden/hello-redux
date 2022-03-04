import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import characterReducer from '../features/character/characterSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      character: characterReducer
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
