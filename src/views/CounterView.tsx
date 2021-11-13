import React from "react";
import Counter from "../components/Counter";
import CounterBy from "../components/CounterBy";
import CounterEffect from "../components/CounterEffect";
import CounterHook from "../components/CounterHook";
import CounterReducer from "../counter-reducer/CounterReducer";

const CounterView = () => {
    return (
        <div>
            <Counter initialValue={15} />
            <CounterBy />
            <CounterEffect />
            <CounterHook />
            <CounterReducer />
        </div>
    );
};

export default CounterView;
