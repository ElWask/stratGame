import React, { useState } from 'react';
import Factory from './Factory';

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

function Game() {
  const [metal, setMetal] = useState(0);
  const [levelMetal, setLevelMetal] = useState(1);
  const [water, setWater] = useState(0);
  const [levelWater, setLevelWater] = useState(1);

  return (
    <div>
      <div className='head-board'>
        <div  className='head-board-title'>Metal:</div><div className='head-board-amount'>{metal}</div>
        <div  className='head-board-title'>Water:</div><div className='head-board-amount'>{water}</div>
      </div>
      <Factory factory={factory.metal} ressource={metal} setRessource={setMetal} level={levelMetal} setLevel={setLevelMetal} />
      <Factory factory={factory.water} ressource={water} setRessource={setWater} level={levelWater} setLevel={setLevelWater} />
    </div>
  );
}

export default Game;
