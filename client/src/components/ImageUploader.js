import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ImageUploader({ album, albumReady }) {
  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
  }, [images])

  function handleFiles(e) {
    const files = document.getElementById('file-uploader').files;
    const selectedImages = [];

    Array.from(files).forEach(file => {
      if (fileTypes.includes(file.type)) {
        selectedImages.push(file);
      } else {
        setError("Please select only image files (png, jpg, etc...)");
      }
    });

    setImages(selectedImages);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('album_id', album.id);

    Array.from(images).forEach(image => {
      formData.append("images[]", image);
    })


    Axios.put('/api/v1/albums/:id', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => console.log(res))
  }

  return (
    <div className={`image-uploader ${albumReady ? 'active' : ''}`}>
      <a href="/" className="nav-link">Back</a>
      <h1 className="text-center">{album.name}</h1>
      <form>
        <label htmlFor="file-uploader">Select images to upload</label>
        <input
          id="file-uploader"
          multiple type="file"
          className="form-control"
          onChange={handleFiles}/>
          <p className="error">{error}</p>
        <input
          type="submit"
          className="btn btn-primary"
          value="upload files"
          disabled={(error.length > 0 || images.length < 1) ? true : false}
          onClick={handleSubmit}/>
      </form>
    </div>
  )
}

export default ImageUploader;
