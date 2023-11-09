import React, { useState, useReducer } from 'react';
import { reducer, initialState } from "../reduc"
import Factory from './Factory';
import Ship from './Ship';

function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [metal, setMetal] = useState(0);
  const [water, setWater] = useState(0);

  const ships = state.ship;
  return (
    <div>
      <div className='head-board'>
        <div  className='head-board-title'>Metal:</div><div className='head-board-amount'>{metal}</div>
        <div  className='head-board-title'>Water:</div><div className='head-board-amount'>{water}</div>
      </div>

      <Factory factory={state.metal} ressource={metal} setRessource={setMetal} level={state.metal.qty} increase={ () => dispatch({ type: 'metal' })} />
      <Factory factory={state.water} ressource={water} setRessource={setWater} level={state.water.qty}  increase={ () => dispatch({ type: 'water' })} />
      <div className='ship-list'>
      {Object.keys(ships).map((name, key) =>   (
        <Ship key={key} ressource={metal} setRessource={setMetal} qty={ships[name].qty} increase={ () => dispatch({ type: 'ship', name: name })} {...ships[name]} />
      ))}
      </div>
      
    </div>
  );
}

export default Game;
