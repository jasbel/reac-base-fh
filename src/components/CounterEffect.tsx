import {gsap} from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

interface Props {
  initialValue?: number;
}

const MAX = 10;

const CounterEffect = ({initialValue = 0}: Props) => {
  const [counter, setCounter] = useState(initialValue)
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((c) => Math.min(c + 2, MAX));
  }

  useEffect(() => {

    if (counter < 10)  return;
    console.log('%c Se llego al valor maximo', 'color: red; background-color: white');


    const tl =gsap.timeline();

    tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
      .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})

  }, [counter])

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h2 ref={counterElement} >{counter}</h2>
      <button onClick={handleClick}>+2</button>
    </>
  )
}

export default CounterEffect
