import React from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import '../style/albumPhotos.scss';

function AlbumPhotos({ name, photos }) {
  const isFull = (photos.length) < 4;

  return (
    <div className="album-photos">
      <Link to='/' className="album-link">{name}</Link>
      <div className="photos-container">
        {
          photos.slice(0, 3).map((photo, index) => {
            return (
              <Link key={index} to='/'>
                <Image
                  cloudName="dijinio"
                  publicId={photo.public_id}
                  height="250"
                  crop="fit" />
              </Link>
            )
          })
        }
        <Link
          to='/'
          className="link"
          hidden={ ((photos.length) < 4) }>
          Show more...</Link>
      </div>
    </div>
  )
}

export default AlbumPhotos;
