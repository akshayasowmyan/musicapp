import React, { Component } from 'react';
import Details from '../../Atoms/Details';
import './detailsList.css';

class DetailsList extends Component{

state = {
    songs: [],
    albums: [],
    name: []
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
            <div className="detaillist-container">
             <ul>
                {this.state.songs.map((song) => (
                    <li key={song.id}>
                        <Details  
                            leftDetail1={song.title} 
                            leftDetail2={`Singer`+ song.id}  
                           leftDetail3="Album 1"
                            rightDetail1="4mins 20sec"
                        ></Details>
                    </li>
                ))}
            </ul>
    </div>
    )
}
};
export default DetailsList; 

