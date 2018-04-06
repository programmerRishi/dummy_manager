import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { RouterComponent } from './Router';

class App extends Component {
  componentWillMount() {
  const config = {
        apiKey: 'AIzaSyCc1QxGNR_0sOnHB0S4e_MSlGPbVs3Q0Zw',
        authDomain: 'manager-12807.firebaseapp.com',
        databaseURL: 'https://manager-12807.firebaseio.com',
        projectId: 'manager-12807',
        storageBucket: 'manager-12807.appspot.com',
        messagingSenderId: '824550482955'
      };
      firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
    <RouterComponent />
    </Provider>
  );
}
}

export default App;
