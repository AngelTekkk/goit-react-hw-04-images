import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Report } from 'notiflix';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState(12);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'searchQuery':
        return setSearchQuery(() => value.trim());

      case 'perPage':
        return setPerPage(() => value);

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery === '') {
      Report.warning('Please enter your search query');
      return;
    }
    onSubmit(searchQuery, perPage);
    setSearchQuery(() => '');
    e.target.reset();
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />

        <label className={s.label}>
          <span>On page</span>
          <select
            className={s.select}
            name="perPage"
            value={perPage}
            onChange={handleChange}
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </label>
      </form>
    </header>
  );
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
