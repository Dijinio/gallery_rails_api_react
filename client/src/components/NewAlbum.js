import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ImageUploader from './ImageUploader';
import '../style/newAlbum.scss';

function NewAlbum() {
  const [albums, setAlbums] = useState([{}]);
  const [name, setName] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState({});
  const [albumReady, setAlbumReady] = useState(false);

  useEffect(() => {
    Axios.get('/api/v1/albums')
    .then(res => {
      setAlbums(res.data.albums);
      setSelectedAlbum(res.data.albums[0]);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length > 0) {
      Axios.post('/api/v1/albums', {
        name
      })
      .then(res => {
        const album = res.data.album;
        setSelectedAlbum({ id: album.id, name: album.name });
      });
    }

    setName("");
    setAlbumReady(true);
  }

  return (
    <div className="new-album">
        <div className={`album-form ${albumReady ? 'active' : ''}`}>
          <form>
          <label htmlFor="existing-album">Choose an Existing Album</label>
          <select
            id="existing-album"
            className="form-control"
            onChange={(e) => setSelectedAlbum(e.target.value)}>
            {albums.map(album => {
              return (<option key={album.id} value={album}>{album.name}</option>)
            })}
          </select>
          <p>or</p>
          <label htmlFor="new-album">Create New Album</label>
          <input
            type="text"
            id="new-album"
            className="form-control"
            placeholder="nature, animals, etc..."
            value={name}
            onChange={(e) => setName(e.target.value)}/>
          <input type="submit" value="continue" className="btn btn-primary" onClick={handleSubmit} />
        </form>
        </div>
        <ImageUploader album={selectedAlbum} albumReady={albumReady}/>
    </div>
  )
}

export default NewAlbum;
