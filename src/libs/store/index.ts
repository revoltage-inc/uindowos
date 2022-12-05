import { configureStore, combineReducers, EnhancedStore } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { animationSlice } from './animation'
import { windowSlice } from './window'

// HACK: `redux-persist failed to create sync storage.
// https://github.com/vercel/next.js/discussions/15687#discussioncomment-45319
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null)
    },
    setItem(_: any, value: any) {
      return Promise.resolve(value)
    },
    removeItem() {
      return Promise.resolve()
    },
  }
}
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

const rootReducer = combineReducers({
  animation: animationSlice.reducer,
  window: windowSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'persist-config',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const createStore = (): EnhancedStore => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}
