import React, { useEffect } from 'react';
import Silo from '../components/Silo';

function Factory({ factory, ressource, setRessource, level, increase }) {
  const { cost, unit, maxCapacity, color } = factory;

  const productionInterval = 100;


  useEffect(() => {
    const productionTimer = setInterval(() => {
      if( ressource < maxCapacity * level ) {
        setRessource((prevRessource) => prevRessource + level * unit);
      }
    }, productionInterval);

    return () => {
      clearInterval(productionTimer);
    };
  }, [level, ressource, setRessource, unit, maxCapacity]);

  const buildFactory = () => {
    if (ressource >= cost) {
      increase();
      setRessource(ressource - cost);
    } else {
      alert("Not enough ressources to build a factory!");
    }
  };



  return (
    <div className='factory'>
      <Silo
        ressource={ressource}
        maxCapacity={maxCapacity * level}
        level={level}
        color={color}

      />

      <button className='button-level-up' onClick={buildFactory}>
        <span>{cost}</span>
        Level up
      </button>
    </div>
  );
}

export default Factory;