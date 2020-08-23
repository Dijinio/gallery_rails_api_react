import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function ImageUploader() {
  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const { selectedAlbum, uploadFiles } = useContext(GlobalContext);

  const [previewSource, setPreviewSource] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // console.log(uploading)
  })

  const handleFiles = (e) => {
    setError('');
    const files = e.target.files;
    previewFiles(files);
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

  const previewFiles = (files) => {
    const prevSources = [];

    for (let file of files) {
      prevSources.push(URL.createObjectURL(file));
    }

    setPreviewSource(prevSources);
  }

  const handleSubmitFiles = (e) => {
    e.preventDefault();

    uploadFiles(images);
  }

  return (
    <div className='image-uploader'>
      <h3 className="text-center mt-5">Upload Photos in</h3>
      <h2 className="text-center">{selectedAlbum.name}</h2>
      <Link to='/new_album'
        className="btn btn-link mb-2">Back</Link>
      <form onSubmit={handleSubmitFiles}>
        <label htmlFor="file-uploader">Select images to upload</label>
        <input
          id="file-uploader"
          multiple type="file"
          className="form-control"
          onChange={handleFiles}/>
          <p className="error">{error}</p>
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="upload files"
          disabled={(error.length > 0 || images.length < 1) ? true : false}/>
      </form>
      {(previewSource && previewSource.map((source, index) => (
          <img
            src={source}
            key={index}
            alt="selected"
            style={{height: '200px', margin: '5px'}}/>
        ))
      )}
    </div>
  )
}

export default ImageUploader;
