import React from 'react';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label className={s.label}>
      <p className={s.parag}>Find contact by name:</p>
      <input
        className={s.input}
        type="text"
        onChange={handleFilterChange}
      ></input>
    </label>
  );
};
