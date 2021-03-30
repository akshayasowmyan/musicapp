import React from 'react';
import './details.css';

class Details extends React.Component{
    render(){
return(
    <div className="details-container" onClick={this.props.handleComponentClick}>
        <div className="details-left">
            <div>
                {this.props.leftDetail1}
            </div>
            <div>
                {this.props.leftDetail2}
            </div>
            <div>
                {this.props.leftDetail3}
            </div>
        </div>
        <div className="details-middle">
            <div>
                {this.props.middleDetail1}
            </div>
        </div>
        <div className="details-right">
            <button onClick={this.props.handleClick}>
                {this.props.rightDetail1}
            </button>
        </div>
    </div>
);
    };
}
export default Details;