import React, { useState, useContext, useEffect } from 'react';
import '../style/newAlbum.scss';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

function NewAlbum() {
  const { albums, selectedAlbum, selectAlbum } = useContext(GlobalContext);
  const [name, setName] = useState("");

  useEffect(() => {
    if (albums.length > 0 && !selectedAlbum.name) {
      selectAlbum({ name: albums[0].name });
    }
  }, [albums]);

  const handleContinue = () => {
    if (name.length > 0) {
      selectAlbum({ name });
    }
  }

  return (
    <>
    <h3 className="text-center mt-5">Upload Photos in</h3>
    <h2 className="text-center">{name ? name : selectedAlbum.name}</h2>
    <div className="new-album mt-2">
        <div className='album-form'>
          <label htmlFor="existing-album">Choose an Existing Album</label>
          <select
            defaultValue={selectedAlbum.name}
            id="existing-album"
            className="form-control"
            onChange={ (e) => selectAlbum({ name: e.target.value }) }>
            {albums.map((album, index) => {
              return (<option key={index} value={album.name}>{album.name}</option>)
            })}
          </select>
          <p className="text-center mt-3">or</p>
          <label htmlFor="new-album">Create New Album</label>
          <input
            type="text"
            id="new-album"
            className="form-control"
            placeholder="nature, animals, etc..."
            value={name}
            onChange={(e) => setName(e.target.value)}/>
          <Link
            to='/add_photos'
            className="btn btn-primary btn-block mt-3"
            onClick={handleContinue}>
            Continue</Link>
        </div>
    </div>
    </>
  )
}

export default NewAlbum;
