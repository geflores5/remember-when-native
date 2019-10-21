import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './config/routes';
import configureStore from './config/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <AppContainer />
    </PersistGate>
  </Provider>
);
