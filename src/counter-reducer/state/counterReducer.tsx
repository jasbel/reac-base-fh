import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const countReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
      case "increaseBy":
          return {
              ...state,
              changes: state.changes + 1,
              counter: state.counter + action.payload.value,
              previous: state.counter,
          };
      case "reset":
          return { ...state, ...INITIAL_STATE };
      default:
          return state;
  }
};