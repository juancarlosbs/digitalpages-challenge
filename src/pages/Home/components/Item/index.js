import React from 'react';

import { useNavigate } from 'react-router-dom';

import './styles.css'


export default function Item({ props, handleSelect }) {

  return (
    <button type='button' onClick={() => handleSelect(props)} className="item-container" to="/details">
      <img className="item-photo" src={props.photo} alt="item" />
      <div className="item-info">
        {Object.entries(props).map(([key, value]) => (
          key !== 'photo' &&
          <div className="item-info-item">
            <span className='item-span-key'>{key}:</span><span> {value}</span>
          </div>
        )
        )}
      </div>
    </ button>
  );
}
// {name, calories, protein, carbohydrates, fiber, blubber, portion, photo}