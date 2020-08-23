export default (state, action) => {
  switch (action.type) {
    case 'LOAD_ALBUMS':
      return {
        ...state,
        albums: action.payload
      }
    case 'SHOW_ALBUM':
      return {
        ...state,
        recordList: action.payload
      }
    case 'SELECT_ALBUM':
      return {
        ...state,
        selectedAlbum: action.payload
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}
