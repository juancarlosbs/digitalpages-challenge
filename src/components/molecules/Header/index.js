import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import './styles.css'

export default function Header({ buttons, color }) {
    return (
        <header className='header-container' style={{backgroundColor: color}}>
            <div className='header-menu-title'>
              <AiOutlineMenu size={24} name="menu" color='black'/>
              <h1 className='title'>Frutas</h1>
            </div>
            <div className='header-buttons'>
              {
                buttons.map(({icon, onPress}) => (
                  <button className='button' type="button" onClick={onPress}>{icon}</button>
                ))
              }
            </div>
        </header>
    );
}