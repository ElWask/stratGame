export const initialState = {
    factory: {
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
      },
    },
    ship: {
      alpha: {
        name: 'alpha',
        img: '🛫',
        cost: 500,
        qty: 0,
        maintenance:{
          metal: 5,
          water: 1
        }
      },
      bravo: {
        name: 'bravo',
        img: '🛰️',
        cost: 1000,
        qty: 0,
        maintenance:{
          metal: 15,
          water: 5
        }
      },
      charlie: {
        name: 'charlie',
        img: '🚀',
        cost: 3000,
        qty: 0,
        maintenance:{
          metal: 50,
          water: 20
        }
      },
      delta: {
        name: 'delta',
        img: '🛸',
        cost: 10000,
        qty: 0,
        maintenance:{
          metal: 1000,
          water: 100
        }
      }
    }
  };

export function reducer(state, action) {
  const { type } = action;
    if (type === 'metal' || type === 'water') {
      return {
        ...state,
        factory: {
          ...state.factory,
          [type]: {
            ...state.factory[type],
            qty: state.factory[type].qty + 1
          }
        }
        
      };
    }
    if (type === 'ship') {
      const { name } = action;
      return {
        ...state,
        ship: {
          ...state.ship,
          [name]: {
            ...state.ship[name],
            qty: state.ship[name].qty + 1
          }
        }
      };
    }
    throw Error('Unknown action.');
}