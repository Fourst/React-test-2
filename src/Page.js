import React, { Component } from 'react';
import PropTypes from "prop-types";

class Page extends Component {
    // state = {
    //     jj: 1
    // }
    

    render(){
        // Page.defaultProps = {
        //     tt:"tt",
        // }
        return(
                <div>
                    <div>{this.props.name}</div>
                    <div>{this.props.id}</div>
                    <div>{this.props.tt}</div>
                    <div>{this.props.hlw}</div>
                    {/* <div>{this.state.jj}</div> */}
                </div>
        )
        
        
    };

    
};

export default Page;