import React, { useContext, useEffect } from 'react';
import AlbumPhotos from './AlbumPhotos';
import { GlobalContext } from '../context/GlobalState';

function AlbumList() {
  const { albums, getAlbums } = useContext(GlobalContext);

  useEffect(() => {
    getAlbums();
  }, [])

  return (
    <div className="container">
      {
        albums.filter(album => album.photos.length).map(album => {
          return (<AlbumPhotos key={album.name} name={album.name} photos={album.photos}/>)
        })
      }
    </div>
  )
}

export default AlbumList;
