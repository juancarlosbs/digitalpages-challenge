import React from 'react';
import { AiOutlineReload, AiOutlineMore } from 'react-icons/ai';

import Header from '../../components/molecules/Header';
import Item from './components/Item';

import './styles.css'

const headerButtons = [
  {
      icon: <AiOutlineReload size={24} name="reload" color='black'/>,
      onPress: () => console.log('reload')
  },
  {
      icon: <AiOutlineMore size={24} name="more" color='black'/>,
      onPress: () => console.log('more')
  }
];

const items = [
  {
    "name": "Abacaxi",
    "calories": "48",
    "protein": "0,54 g",
    "carbohydrates": "12,63 g",
    "fiber": "1,4 g",
    "blubber": "0,12 g",
    "portion": "1,2 fatias",
    "photo": "http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits/abacaxi.jpg"
  },
];

export default function Home() {

    return (
      <div className="home-container" >
          <Header buttons={headerButtons}/>
          <div className='home-content'>
            { items.map((item) => (
                <Item props={item} />
              ))
            }
          </div>
      </ div>
    );
}
