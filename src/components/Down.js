import React, { Component } from 'react';

const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra", 
        "iPhone 7", 
        "Google Pixel", 
        "Huawei P9", 
        "Meizu Pro 6", 
        "Asus Zenfone 3"
    ]
};
class Down extends Component {

render(){

    return(
        
        <ItemsList data={propsValues} />
    )
}
}
class Item extends React.Component {
    render() {
        return <li>{this.props.name}</li>;
    }
}
class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};
                 
        this.filterList = this.filterList.bind(this);
    }
    // фильтрация списка
    filterList(e){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        // обновление состояния
        this.setState({items: filteredList});
    }
     
    render() {
        return(
            <div>         
                <h2>{this.props.data.title}</h2>
                <input placeholder="Поиск" onChange={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}
export default Down;