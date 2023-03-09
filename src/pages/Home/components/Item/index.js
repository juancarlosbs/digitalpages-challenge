import React from 'react';

import './styles.css'

const valuesListed = [
  "calories",
  "protein",
  "carbohydrates",
  "fiber",
  "blubber",
  "portion",
];


export default function Item({ props, handleSelect }) {
  return (
    <button type='button' onClick={() => handleSelect(props)} className="item-container" to="/details">
      <div className='item-image-text'>
      <img className="item-photo" src={props.photo} alt="item" />
        <h3>{props.name}</h3>
      </div>
      <div className="item-info">
        {Object.entries(props).map(([key, value]) => (
          valuesListed.includes(key) &&
          <div className="item-info-item">
            <span className='item-span-key'>{key}:</span><span> {value}</span>
          </div>
        )
        )}
      </div>
    </ button>
  );
}