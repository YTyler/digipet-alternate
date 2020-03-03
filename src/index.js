import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
// import reducer from './reducers/digmon-reducer';
import { Provider } from 'react-redux';


const initialState = {
    pet: {
      hunger: 100,
      happiness: 100
    },
    currentView: 0,
    selected: 0
  }

const reducer = (state = initialState, action) => {
  return initialState;
}

const store = createStore(reducer)


ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
