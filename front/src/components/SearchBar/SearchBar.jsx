import './SearchBar.css';
import React from 'react';
import { useState } from 'react';
import searchProductByName from '../../api/searchProductByName';

function SearchBar() {
  const [search, setSearch] = useState('');
  const searchProduct = async (event) => {
    event.preventDefault();

    try {
      const response = await searchProductByName(search);
    } catch (e) {
      console.log(e);
      alert('Error while searching product');
    }
  };

  const changeSearchValue = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="sup-bar">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,1,-25"
      />
      <div className="searching-container">
        <form onSubmit={searchProduct} className="search-form">
          <button type="submit" className="Search-Button">
            <i class="material-symbols-outlined" style={{ color: '#9796a1' }}>
              search
            </i>
          </button>
          <input
            className="input-text"
            onChange={changeSearchValue}
            type="text"
            name="search"
            placeholder="Buscar..."
          />
        </form>
      </div>
      <div className="opts">
        <div>
          <i img className="filter-button"></i>
        </div>
        <div>
          <button className="location-button"> </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
