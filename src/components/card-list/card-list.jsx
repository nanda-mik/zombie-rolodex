import React from 'react';
import {Card} from '../card/card';
import './card-list.css';

export const Cardlist = props => {
    console.log(props);
    return <div className='card-list'>
        {props.players.map(player => (
            <Card key={player.id} player={player}/>
        ))}
    </div>;
};

