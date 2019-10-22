import React, { createContext, FC, Reducer, useReducer, Dispatch } from 'react';

interface State {
  totalPrice: number;
  totalTicketCount: number;
}

interface UseReduser {
  state: State;
  dispatch: Dispatch<Action>;
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        totalPrice: state.totalPrice + action.payload.price,
        totalTicketCount: state.totalTicketCount + 1,
      };

    case 'remove':
      if (!state.totalTicketCount) return state;
      return {
        totalPrice: state.totalPrice - action.payload.price,
        totalTicketCount: state.totalTicketCount - 1,
      };

    case 'reset':
      return {
        totalPrice: action.payload.price,
        totalTicketCount: 0,
      };

    default:
      throw new Error();
  }
};

const initialState: UseReduser = {
  state: {
    totalPrice: 0,
    totalTicketCount: 0,
  },
  dispatch: () => {},
};

export const TotalContext = createContext(initialState);

export const TotalContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return <TotalContext.Provider value={{ state, dispatch }}>{children}</TotalContext.Provider>;
};
