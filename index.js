/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {store,persistor} from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
 
// ... normal setup, create store and persistor, import components etc.
 
const ReduxProvider = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};


AppRegistry.registerComponent(appName, () => ReduxProvider);
