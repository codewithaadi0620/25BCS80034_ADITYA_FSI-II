import { useEffect, useRef, useState } from "react";

function App() {
  const [time, setTime] = useState({ hrs: 0, min: 0, sec: 0, milli: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const changeColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const startTimer = () => {
    if (isRunning) return;

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((previousTime) => {
        let newMilli = previousTime.milli + 10;
        let newSec = previousTime.sec;
        let newMin = previousTime.min;
        let newHrs = previousTime.hrs;

        if (newMilli >= 1000) {
          newSec += 1;
          newMilli = 0;
        }

        if (newSec >= 60) {
          newMin += 1;
          newSec = 0;
        }

        if (newMin >= 60) {
          newHrs += 1;
          newMin = 0;
        }

        return { hrs: newHrs, min: newMin, sec: newSec, milli: newMilli };
      });
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime({ hrs: 0, min: 0, sec: 0, milli: 0 });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "2rem" }}>
      <h1>
        Stopwatch: {String(time.hrs).padStart(2, "0")}:{String(time.min).padStart(2, "0")}:
        {String(time.sec).padStart(2, "0")}.{Math.floor(time.milli / 10)}
      </h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ margin: "0 0.5rem" }}>Stop</button>
      <button onClick={resetTimer}>Reset</button>

      <div style={{ marginTop: "1.5rem" }}>
        <button onClick={() => changeColor("red")}>Red</button>
        <button onClick={() => changeColor("green")} style={{ margin: "0 0.5rem" }}>Green</button>
        <button onClick={() => changeColor("blue")}>Blue</button>
      </div>
    </div>
  );
}

export default App;