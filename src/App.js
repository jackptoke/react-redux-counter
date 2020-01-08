import React, {Component} from 'react';
import './App.css';
import Counter from './Counter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import { act } from 'react-dom/test-utils';

const initialState = { count: 0 };

class App extends Component {

  reducer(state=initialState, action){
    let newState = {};
    switch(action.type){
      case "UPDATE_COUNT":
        newState = { count: action.newCount};
        break;
      default:
        newState = { ...state};
        break;
    }
    return newState;
  }

  store = createStore(this.reducer);

  render(){
    return (
      <Provider store={this.store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
