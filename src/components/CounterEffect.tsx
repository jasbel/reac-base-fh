import React, { useEffect, useState } from 'react'

interface Props {
  initialValue?: number;
}

const MAX = 10;

const CounterEffect = ({initialValue = 0}: Props) => {
  const [counter, setCounter] = useState(initialValue)

  const handleClick = () => {
    setCounter((c) => Math.min(c + 1, MAX));
  }

  useEffect(() => {

    if (counter <= 10)  return;
    console.log('%c Se llego al valor maximo', 'color: red; background-color: white');

  }, [counter])

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  )
}

export default CounterEffect
