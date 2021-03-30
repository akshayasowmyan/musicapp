import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ActionButtons from '../../Atoms/ActionButtons';
import Details from '../../Atoms/Details';
import './eachPlaylist.css';

class EachPlaylist extends Component{


    state = {
        songs: [],
        albums: [],
        name: [],
        clicked: false
    }
    
    
    addMoreSongs = () =>{
        this.setState({
            clicked: true
        });
    }
    fetchSongsList = fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then(songsList => {
        this.setState({ songs: songsList });
    });
    
    fetchAlbumList = 
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then(albumsList => {
            this.setState({ albums: albumsList });
    });

     
render() {

    return (
        <div>
            <div className="">
            <ActionButtons label="Shuffle Play" ></ActionButtons>
            </div>
            <Link path="/createPlayList" >Add more songs</Link>
            <div className="eachplaylist-container">
             <ul>
                {this.state.songs.map((song) => (
                    <li key={song.id}>
                        <Details  
                            leftDetail1={song.title} 
                            leftDetail2={`Singer`+ song.id}  
                            leftDetail3="Album 1"
                            middleDetail1="4mins 20sec"
                            rightDetail1="Delete" 
                            
                        ></Details>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}
};
export default EachPlaylist; 

