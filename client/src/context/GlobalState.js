import React, { useEffect, createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

//initial state
const initialState = {
  albums: [],
  theAlbum: {},
  selectedAlbum: {},
  loading: false
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  let history = useHistory();

  // useEffect(() => {
  //   getAlbums();
  // }, [])

  //actions
  function getAlbums() {
    Axios.get('/api/v1/albums')
    .then(res => {
      dispatch({
        type: 'LOAD_ALBUMS',
        payload: res.data.albums
      });
    })
    .catch(err => console.log(err));
  }

  function selectAlbum(album) {
    dispatch({
      type: 'SELECT_ALBUM',
      payload: album
    })
  }

  function setLoading(condition) {
    dispatch({
      type: 'SET_LOADING',
      payload: condition
    });
  }

  function uploadFiles(images) {
    setLoading(true);

    const formData = new FormData();

    formData.append('album_name', state.selectedAlbum.name);

    Array.from(images).forEach(image => {
      formData.append("images[]", image);
    });

    Axios.post('/api/v1/albums', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {
      console.log(res)
      setLoading(false);
      history.push('/');
    });
  }


  return (
    <GlobalContext.Provider value={{
      albums: state.albums,
      loading: state.loading,
      selectedAlbum: state.selectedAlbum,
      getAlbums,
      selectAlbum,
      uploadFiles
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
