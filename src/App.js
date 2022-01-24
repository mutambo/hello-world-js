import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/message'
import Counter from './components/Counter';
import Function from './components/Function'

class App extends Component{
  render(){
    return (
      <div className="App">
      <Function/>
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name = "Max"/>
      <Greet name = "Maxi"/>
      <Greet name = "Maxy"/> */}
      {/* <Welcome/> */}
      {/* <Hello/>
         */}
      </div>
    );
  }
}
export default App;
