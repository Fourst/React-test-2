import React, { Component } from 'react';
import Down from './Down';

class Up extends Component {
    
    state = {
        items: [1,2,3,4,5],
        text: '',
        open: true
    };
    
    showList = ()=>{
        const lst = this.state.items.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
        this.setState({text:<ul>{lst}</ul>});
    }
    addItem = ()=>{
       this.state.items.push('пункт');
       this.setState({items: this.state.items});
    }
  
    removeItem = (num)=>{
        this.state.items.splice(num,1);
        this.setState({items:this.state.items});
        
    }
render(){
    const list = this.state.items.map((item, index) => {
        return(
            <li key={index}>{item}>
             
            <button onClick = {this.removeItem(this,index)}>Remove punkt</button>
            </li>
        )
    });
    
    return(
        // <Down/>
        
        <div>
      
                <ul>
                    {list} 
                </ul>
                
         
            {this.state.text}
            <button onClick = {this.showList}>Show List</button>
            <button onClick = {this.addItem}>Show punkt</button>
            
            <Down/>
        </div>
    )
}
}

export default Up;