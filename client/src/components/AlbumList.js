import React from 'react';
import Axios from 'axios';

function AlbumList() {

  function handleClick() {
    Axios.get('/api/v1/albums')
    .then(res => console.log(res));
  }

  return (
    <div className="container">
      <h1>Albums</h1>
      <button onClick={handleClick}>Get Albums</button>
    </div>
  )
}

export default AlbumList
