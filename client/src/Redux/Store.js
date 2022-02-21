import {configureStore,combineReducers} from "@reduxjs/toolkit";
import UserRedux from "./Userslic";
import ProductRedux from "./ProductRedux"
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
  import storage from 'redux-persist/lib/storage'
 
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const RootedReducer=combineReducers({
     user: UserRedux,
     products:ProductRedux
})
  const persistedReducer = persistReducer(persistConfig, RootedReducer )
 export const store= configureStore({
     reducer:persistedReducer,
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }),
 })
export let persistor = persistStore(store);
