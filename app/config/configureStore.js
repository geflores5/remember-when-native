import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

import rootReducer from '../reducers';
import firebase from './configureFirebase';

export default () => {
  const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(firebase)
    )
  );

  return store;
}