import React, { useState, useReducer, useEffect } from 'react';
import { reducer, initialState } from "../reduc"
import Factory from './Factory';
import Ship from './Ship';

function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [metal, setMetal] = useState(0);
  const [water, setWater] = useState(0);
  const [profitMetal, setProfitMetal] = useState(0);
  const [profitWater, setProfitWater] = useState(0);
  const [feesMetal, setFeesMetal] = useState(0);
  const [feesWater, setFeesWater] = useState(0);
  const ships = state.ship;
  const factories = state.factory;
  const interval = 100;

  useEffect(() => {
    let totalMetal = 0;
    let totalWater = 0;
    Object.keys(ships).forEach((name) => {
      totalMetal += ships[name].qty * ships[name].maintenance.metal;
      totalWater += ships[name].qty * ships[name].maintenance.water;
    })
    setFeesMetal(totalMetal);
    setFeesWater(totalWater);
    }, [ships]);

  useEffect(() => {
    let totalMetal = 0;
    let totalWater = 0;
    totalMetal += factories.metal.qty * factories.metal.unit;
    totalWater += factories.water.qty * factories.water.unit;
    setProfitMetal(totalMetal);
    setProfitWater(totalWater);
  }, [factories]);


  useEffect(() => {
    const metalFactory = state.factory.metal;
    const waterFactory = state.factory.water;
    const productionTimer = setInterval(() => {
      if(metal < metalFactory.maxCapacity *  metalFactory.qty) {
        setMetal((prevRessource) => prevRessource + (profitMetal - feesMetal));
      }
      if(water < waterFactory.maxCapacity *  waterFactory.qty) {
        setWater((prevRessource) => prevRessource + (profitWater - feesWater));
      }
    }, interval);

    return () => {
      clearInterval(productionTimer);
    };
  }, [state.factory.metal, state.factory.water, water, metal, profitMetal, profitWater, feesMetal, feesWater]);

  return (
    <div>
      <div className='head-board'>
        <div  className='head-board-title'>Metal:</div><div className='head-board-amount'>{metal}</div>
        <div  className='head-board-title'>/</div><div className='head-board-amount'>{state.factory.metal.maxCapacity*state.factory.metal.qty}</div>
        <div  className='head-board-title'>Water:</div><div className='head-board-amount'>{water}</div>
        <div  className='head-board-title'>/</div><div className='head-board-amount'>{state.factory.water.maxCapacity*state.factory.water.qty}</div>
      </div>
      <div className='head-board'>
        <div  className='head-board-title'>Profit Metal:</div><div className='head-board-amount'>{profitMetal}/s</div>
        <div  className='head-board-title'>Profit Water:</div><div className='head-board-amount'>{profitWater}/s</div>
      </div>
      <div className='head-board'>
        <div  className='head-board-title'>Cost Metal:</div><div className='head-board-amount'>{feesMetal}/s</div>
        <div  className='head-board-title'>Cost Water:</div><div className='head-board-amount'>{feesWater}/s</div>
      </div>

      <Factory factory={state.factory.metal} ressource={metal} setRessource={setMetal} level={state.factory.metal.qty} increase={ () => dispatch({ type: 'metal' })} />
      <Factory factory={state.factory.water} ressource={water} setRessource={setWater} level={state.factory.water.qty}  increase={ () => dispatch({ type: 'water' })} />
      <div className='ship-list'>
      {Object.keys(ships).map((name, key) =>   (
        <Ship key={key} ressource={metal} setRessource={setMetal} qty={ships[name].qty} increase={ () => dispatch({ type: 'ship', name: name })} {...ships[name]} />
      ))}
      </div>
      
    </div>
  );
}

export default Game;
