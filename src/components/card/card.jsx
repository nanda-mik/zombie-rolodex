import React from 'react';

import './card.css';

export const Card = (props) => {
    return <div className='card-container'>
        <img alt="player" src={`https://robohash.org/${props.player.id}?set=set2&size=180x180`}/>
        <h2>{props.player.name}</h2>
        <p>{props.player.email}</p>
        </div>
}