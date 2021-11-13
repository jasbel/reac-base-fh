
import React from 'react'
import { useCounter2 } from "../hooks/useCounter2";

interface Props {
    initialValue?: number;
}
const CounterHook = ({ initialValue = 0 }: Props) => {
    const { counter, counterElement, handleClick } = useCounter2({maxCount: 10, initValue: 4});

    return (
        <>
            <h1>Counter: {counter}</h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={handleClick}>+2</button>
        </>
    );
};

export default CounterHook;
