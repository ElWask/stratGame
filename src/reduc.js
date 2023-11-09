export const initialState = {
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
    ship: {
      alpha: {
        name: 'alpha',
        img: '🛫',
        cost: 500,
        qty: 0,
      },
      bravo: {
        name: 'bravo',
        img: '🛰️',
        cost: 1000,
        qty: 0,
      },
      charlie: {
        name: 'charlie',
        img: '🚀',
        cost: 3000,
        qty: 0,
      },
      delta: {
        name: 'delta',
        img: '🛸',
        cost: 10000,
        qty: 0,
      }
    }
  };

export function reducer(state, action) {
    if (action.type === 'metal' || action.type === 'water') {
      return {
        ...state,
        [action.type]: {
          ...state[action.type],
          qty: state[action.type].qty + 1
        }
      };
    }
    if (action.type === 'ship') {
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