import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar bg-dark">
      <Link to="/" className="navbar-brand text-light">Gallery</Link>
      <Link to="/new_album" className="btn btn-outline-primary">Upload Photos</Link>
    </div>
  )
}

export default Navbar;
