import React from 'react';
import AlbumList from './components/AlbumList';
import Navbar from './components/Navbar';
import NewAlbum from './components/NewAlbum';
import ImageUploader from './components/ImageUploader';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={AlbumList} />
              <Route exact path="/new_album" component={NewAlbum} />
              <Route exact path="/add_photos" component={ImageUploader} />
            </Switch>
        </div>
        </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
