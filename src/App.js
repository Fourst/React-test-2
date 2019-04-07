import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page';
import Up from './components/Up';
import Down from './components/Down';

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
    id: 1,
    gg: "Привет",
    name:"Test",
    hello: false,
    show: true,
  };
  plusOne = ()=>{
    console.log("e");
    const kk = this.setState(prevState =>({ id: prevState.id + 1 }))
   
  }
  changeName = ()=>{
    this.setState({
      name:"neTest"
    });
  }
  toggle = ()=>{
    this.setState({
        show: !this.state.show
    })
  }
  hideText = () =>{
    this.setState(
      {
        show:false
      }
    )
  }


  render() {
    console.log();
      var mess
        if (this.state.show) {
            mess = <p>Privet!</p>;
        }
    return (
      <div className="App">

        <Bpp text="Hello" id={this.state.id} met={this.plusOne} />
        <Page name={this.state.name}/>
        
        {this.state.hello ? 'pivet':'poka'}
        <button onClick={this.toggle}>нажми</button>

        <div className="brd">
        {mess}
        <button onClick={this.toggle}>ssss</button>
        </div> 
        
        <Up/>
      </div>
    );
  }
}

export default App;
