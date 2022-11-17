import React from 'react';
import Card from './Card';
// import './Cards.css';

export default function Cards(props) {

  return <div className='coso'>
    {
      props.zones.map(
        ciudad =>(
          <Card
          key={ciudad.id}
          max={ciudad.main.temp_max}
          min={ciudad.main.temp_min}
          name={ciudad.name}
          img={ciudad.weather[0].icon}
          onClose={() => alert(ciudad.name)}
        />
        )
      )
    }

  </div>
};