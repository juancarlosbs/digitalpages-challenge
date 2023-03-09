import React, { useContext } from "react";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Header from "../../components/molecules/Header";
import { SelectedContext } from "../../storage/SelectedContext";

import "./styles.css";

const valuesListed = [
  "calories",
  "protein",
  "carbohydrates",
  "fiber",
  "blubber",
  "portion",
];

export default function Details() {
  const { state } = useContext(SelectedContext);
  const navigate = useNavigate()

  const headerButtons = [
    {
      icon: <AiOutlineSearch size={24} name="search" color='black'/>,
      onPress: () => console.log('search')
    },
  ]

  return (
    <div className="details-container">
      <Header buttons={headerButtons}/>
      <button className="back-button" type="button" onClick={() => navigate('/')}>
          <AiOutlineArrowLeft size={24} name="back" color='black'/>
      </button>
      <div className="details-content">
        <div className="details-item"> 
          <div className="details-image-name">
            <img src={state.photo} alt={state.name}/>
            <h1>{state.name}</h1>
          </div>
          <div className="details-values">
          {Object.entries(state).map(([key, value]) => (
            valuesListed.includes(key) &&
              <div className="item-info-item">
                <span className='item-span-key'>{key}:</span><span> {value}</span>
              </div>
          )
          )}
          </div>
        </div>
      </div>
    </div>
  )
}
