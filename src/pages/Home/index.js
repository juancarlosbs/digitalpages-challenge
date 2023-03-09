import React, { useEffect, useContext, useState } from 'react';
import { AiOutlineReload, AiOutlineMore } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { SelectedContext } from '../../storage/SelectedContext';

import Header from '../../components/molecules/Header';
import Item from './components/Item';

import { api } from '../../services/api';

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

export default function Home() {
  const [items, setItems] = useState([]);
  const { dispatch } = useContext(SelectedContext);

  const navigate = useNavigate();

  console.log(items)
  
  const loadItems = async () => {
    const response = await api.get('/fruits.json');
    setItems(response.data);
  }

  const handleSelect = (props) => {
    dispatch({ type: 'select', item: props })
    navigate('/details')
  }

  useEffect(() => {
    loadItems();
},[])

    return (
      <div className="home-container" >
          <Header buttons={headerButtons}/>
          <ul className='home-content'>
            {items.length > 0 && items.map((item) => (
                <li>
                <Item props={item} handleSelect={handleSelect}/>
                </li>
              ))
            }
          </ul>
      </ div>
    );
}
