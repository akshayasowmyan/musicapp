import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Details from '../../Atoms/Details';
import './createPlayList.css';

function CreatePlayList() {

  
const [item, setItem] = useState([]);
const fetchItem = async () => {
    const fetchItem = await fetch ('https://jsonplaceholder.typicode.com/photos');

const item = await fetchItem.json();
localStorage.setItem('item', JSON.stringify(item))
setItem(item);

};
useEffect(() => {
    fetchItem();
 
},[]);

return (
            <div className="createPlaylist-container">
                <div className="">
                  
                <ul>
                 {item.map((song) => (
                    <li key={song.id}>
                        <Details  
                            leftDetail1={song.title} 
                            leftDetail2={`Singer`+ song.id}  
                            leftDetail3="Album 1"
                            middleDetail1="4mins 20sec"
                            rightDetail1="Add To List" 
                        ></Details>
                    </li>
                ))}
            </ul>
               
                </div>
            </div>
        );
  }  

export default CreatePlayList;
