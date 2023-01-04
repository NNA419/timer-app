import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(false);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
        //  console.log(time);
      if (isStart.current) {
        //  console.log(time)
         setTime((time) => time + 1);
       }
     }, 1000);
  };

  console.log(time);
  const stopTimer = () => {
    active.current.disabled = false;
    clearInterval(refInterval.current);
  };
  const resetTimer = () => {
    setTime(0);
    active.current.disabled = false;
    clearInterval(refInterval.current)
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
