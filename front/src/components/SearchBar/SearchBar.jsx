import './SearchBar.css';
import React from 'react';

function SearchBar() {
  return (
    <div className="sup-bar">
      <div className="searching-container">
        <form className="search-form">
          <button type="submit" className="Search-Button"></button>
          <input className="input-text" placeholder="Buscar..." />
        </form>
      </div>
      <div className="opts">
        <div className ="filter-b">
          <button img className="filter-button">
          </button>
        </div>
        <div className="location-b">
          <button className="location-button"> </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
