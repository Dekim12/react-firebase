import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import rootReducer from './store/reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from './config/firebaseConfig';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
      userProfile: 'users',
      useFirestoreForProfile: true,
      attachAuthIsReady: true,
    })
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});

serviceWorker.unregister();
