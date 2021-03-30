import React from 'react';
import { Link } from 'react-router-dom';
import ActionButtons from '../../Atoms/ActionButtons';
import SearchInput from '../../Atoms/SearchInput';
import CreatePlayList from '../CreatePlayList';
import Details from '../../Atoms/Details'
import EachPlaylist from '../EachPlaylist/eachPlaylist';
import './playlist.css';

class Playlist extends React.Component{
    constructor() {
        super();
        
        this.state = {
          clicked: false,
          componentClicked: false
        };
    
        this.handleComponent = this.handleComponent.bind(this);
      }
      
  
    handleComponent(){
      this.setState({
        componentClicked: true
      });
    }
    render(){
        return(
          <div>
          <div className="detailslist-container">
            <Link to="/eachPlaylist">
              <Details
                  handleComponentClick={this.handleComponent}  
                  leftDetail1="Playlist1"
                  rightDetail1="Created At: 22-03-2021 05:30PM" 
              >
              </Details>
            </Link>
          </div>
            <div> 
                    <Link to="/createPlayList">createPlayList</Link>
            </div>
            </div>
        )
    }
}
export default Playlist;