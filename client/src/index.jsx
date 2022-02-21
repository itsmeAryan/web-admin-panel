import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Browser} from "react-router-dom"
import App from "./App";
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import {persistor,store} from "./Redux/Store"
import {CookiesProvider} from "react-cookie"
const Root=document.getElementById("root");
ReactDOM.render(
    <Browser>
    <Provider store={store}>

    <PersistGate loading={null} persistor={persistor}>
      <CookiesProvider>
      <App />
      </CookiesProvider>
    </PersistGate>

    </Provider>
    </Browser>
    ,
    Root
)