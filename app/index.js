import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './config/routes';
import configureStore from './config/configureStore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from '../app/config/configureFirebase';

const store = configureStore();

const rrfConfig = { userProfile: 'users' }

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

export default () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AppContainer />
    </ReactReduxFirebaseProvider>
  </Provider>
);
