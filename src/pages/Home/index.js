import React, { useEffect, useContext, useState } from 'react';
import { AiOutlineReload, AiOutlineMore } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { SelectedContext } from '../../storage/SelectedContext';

import Header from '../../components/molecules/Header';
import Item from './components/Item';

import { api } from '../../services/api';

import './styles.css'



export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(SelectedContext);

  const headerButtons = [
    {
        icon: <AiOutlineReload size={24} name="reload" color='black'/>,
        onPress: () => loadItems()
    },
    {
        icon: <AiOutlineMore size={24} name="more" color='black'/>,
        onPress: () => console.log('more')
    }
  ];

  const navigate = useNavigate();

  const loadItems = async () => {
    setLoading(true);
    const response = await api.get('/fruits.json');
    setItems(response.data);
    setLoading(false);
  }


  console.log(items)

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
          
          <div className='home-content'>
          { loading && <ReactLoading type='spin' color='#96be25'/>}
            {items.length > 0 && items.map((item) => (
                <Item props={item} handleSelect={handleSelect}/>
              ))
            }
          </div>
      </ div>
    );
}
