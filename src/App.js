import React, { useState } from "react";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer();
  console.log(time);
  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button
            onClick={stopTimer}
            className="button">
            Stop
          </button>
          <button
            onClick={startTimer}
            className="button"
             ref={active}
          >
            Start
          </button>
          <button onClick={resetTimer} className="button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
