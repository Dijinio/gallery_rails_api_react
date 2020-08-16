import React from 'react';
import AlbumList from './components/AlbumList';
import Navbar from './components/Navbar';
import NewAlbum from './components/NewAlbum';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AlbumList />
      <NewAlbum />
    </div>
  );
}

export default App;
