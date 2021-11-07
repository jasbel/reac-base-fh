import React, { useState } from "react";

interface Props {
    initialValue?: number;
}

type CounterState = {
  count: number,
  clicks: number,
}

const CounterBy = ({ initialValue = 0 }: Props) => {
    const [counter, setCounter] = useState<CounterState>({
        count: initialValue,
        clicks: 0,
    });

    const handleClick = (val: number) => {
        // setCounter({...counter, count: counter.count + val, clicks: counter.clicks + 1});
        setCounter(({clicks, count}) =>({clicks: clicks+1, count: count+val}));
    };
    return (
        <>
            <h1>Counter: {counter.count}</h1>
            <h1>Clicks: {counter.clicks}</h1>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    );
};

export default CounterBy;
