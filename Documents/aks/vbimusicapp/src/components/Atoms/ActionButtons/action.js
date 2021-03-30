import React from 'react';
import './action.css';

class ActionButtons extends React.Component{

    render(){
        return(
            <button
                className="btn"
                onClick={this.props.handleClick}>{this.props.label}
            </button>
        );
    }
}
export default ActionButtons;