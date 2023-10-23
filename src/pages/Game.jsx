import React, { useState, useReducer } from 'react';
import Factory from './Factory';
import Ship from './Ship';

const factory = {
  metal: {
    cost: 50,
    unit:1,
    maxCapacity: 400,
    color: 'gray'
  },
  water: {
    cost: 20,
    unit: 0.5,
    maxCapacity: 100,
    color: 'blue'
  }
}

const ships = [
  {
    name: 'alpha',
    img: '🛫',
    cost: 500,
  },
  {
    name: 'bravo',
    img: '🛰️',
    cost: 1000
  },
  {
    name: 'charlie',
    img: '🚀',
    cost: 3000
  },
  {
    name: 'delta',
    img: '🛸',
    cost: 10000
  }
]

function reducer(state, action) {
  if (action.type === 'metal' || action.type === 'water') {
    return {
      ...state,
      [action.type]: {
        qty: state[action.type].qty + 1
      }
    };
  }
  throw Error('Unknown action.');
}


function Game() {

  const initialState = {
    metal: {
      cost: 50,
      unit:1,
      maxCapacity: 400,
      color: 'gray',
      qty: 1
    },
    water: {
      cost: 20,
      unit: 0.5,
      maxCapacity: 100,
      color: 'blue',
      qty:1
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [metal, setMetal] = useState(0);
  const [water, setWater] = useState(0);

  return (
    <div>
      <div className='head-board'>
        <div  className='head-board-title'>Metal:</div><div className='head-board-amount'>{metal}</div>
        <div  className='head-board-title'>Water:</div><div className='head-board-amount'>{water}</div>
      </div>

      <Factory factory={factory.metal} ressource={metal} setRessource={setMetal} level={state.metal.qty} increase={ () => dispatch({ type: 'metal' })} />
      <Factory factory={factory.water} ressource={water} setRessource={setWater} level={state.water.qty}  increase={ () => dispatch({ type: 'water' })} />
      <div className='ship-list'>
      {ships.map(ship => (
        <Ship key={ship.name} {...ship} />
      ))}
      </div>
      
    </div>
  );
}

export default Game;
