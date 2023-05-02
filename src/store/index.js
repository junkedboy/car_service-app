import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import loginSession from './loginSession'
import modal from './modal'
import focus from './focus'

const rootReducer = combineReducers({
    modal: modal,
    loginSession: loginSession,
    focus: focus,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['focus']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store