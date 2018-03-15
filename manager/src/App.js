import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBrXLFvwG9KQi7HzH_RwIGzr0UePlFL_Hs",
      authDomain: "managerudemy-ec799.firebaseapp.com",
      databaseURL: "https://managerudemy-ec799.firebaseio.com",
      projectId: "managerudemy-ec799",
      storageBucket: "",
      messagingSenderId: "742174562645"
    };

    firebase.initializeApp(config);
  }

  render() {
    // {} = any initial state we want to pass like email, mostly used in server-side rendering
    // applyMiddleware(), are store enhancer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;