import  { useReducer } from "react";
import { CounterAction, doIncreaseBy, doReset } from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
};

const countReducer = (
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

const CounterReducer = () => {
    const [state, dispatch] = useReducer(countReducer, INITIAL_STATE);

    const handleIncreseBy = (val: number) => {
        dispatch(doIncreaseBy(val));
    };

    const handleReset = () => {
        dispatch(doReset());
    };

    return (
        <>
            <h2>
                <pre>
                    {JSON.stringify(state, null, 3)}
                </pre>
            </h2>
            <button onClick={() => handleIncreseBy(1)}>+1</button>
            <button onClick={() => handleIncreseBy(5)}>+5</button>
            <button onClick={() => handleIncreseBy(10)}>+10</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

export default CounterReducer;
