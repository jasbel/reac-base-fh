import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const useCounter2 = ({maxCount = 10, initValue = 0 }) => {

  const [counter, setCounter] = useState(initValue)
  const counterElement = useRef<HTMLHeadingElement>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((c) => Math.min(c + 2, maxCount));
  }

  useLayoutEffect(() => {
    // if (counter < 10)  return;
    // console.log('%c Se llego al valor maximo', 'color: red; background-color: white');
    // const tl =gsap.timeline();
    tl.current.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
      .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})
      .pause();
  }, [])

  useEffect(() => {
    tl.current.play(0);
  }, [counter])

  return {
    counter,
    counterElement,
    handleClick,
  }
}