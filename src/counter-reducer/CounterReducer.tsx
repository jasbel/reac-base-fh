import  { useReducer } from "react";
import * as actionCount from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { countReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
};



const CounterReducer = () => {
    const [state, dispatch] = useReducer(countReducer, INITIAL_STATE);

    const handleIncreseBy = (val: number) => {
        dispatch(actionCount.doIncreaseBy(val));
    };

    const handleReset = () => {
        dispatch(actionCount.doReset());
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
