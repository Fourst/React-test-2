import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Bpp extends Component{
  render(){
    console.log(this.props);
    
    return (
        <div>
            {this.props.text}
            {this.props.id === 2 ? null: this.props.id }
            <button onClick={this.props.met}>1231241231</button>
        </div>
    )
  }
}

class App extends Component {
  state = {
    id: 1
  };
  plusOne = ()=>{
    console.log("e");
    this.setState(prevState =>({ id: prevState.id + 1 }))
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <button onClick={this.plusOne}>Plus+1</button> */}
        <Bpp text="Hello" id={this.state.id} met={this.plusOne}  />
        
      </div>
    );
  }
}

export default App;
