import React from 'react';
import { createStore } from 'redux'
import { Provider } from "react-redux";
import MyApp from './src/lesson/Redux/MyApp';


/**
 * Install
 * 
 * npm install redux react-redux
 * 
 */

const initState = {
  myCounter : 0
}

const reducer = (state = initState, action) => {

  switch (action.type) {
    case 'INC_COUNTER':
      return { myCounter: state.myCounter + 1 }
    case 'DEC_COUNTER':
      if (state.myCounter >= 1) {
        return { myCounter: state.myCounter - 1 }
      } else {
        return state;
      }


    default:
      break
  }
}

const store = createStore(reducer);




export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    );
  }
}



