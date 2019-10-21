import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import configureStore from './config/configureStore';

const store = configureStore();

export default () => (
  <Provider store={store.store}>
    <Navigator />
  </Provider>
);
