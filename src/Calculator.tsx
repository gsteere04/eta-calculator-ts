import React, { useState } from "react";
import './Calculator.css';
const Calculator: React.FC = () => {
  const [distance, setDistance] = useState<number | string>("");
  const [speed, setSpeed] = useState<number | string>("");
  const [result, setResult] = useState<number | string>("");

  const handleDistanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.valueAsNumber;
    setDistance(isNaN(value) ? "" : value);
  };

  const handleSpeedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.valueAsNumber;
    setSpeed(isNaN(value) ? "" : value);
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        console.log("Distance:", distance);
        console.log("Speed:", speed);

        if (typeof distance === 'number' && typeof speed === 'number' && speed > 0) {
            const time = distance/speed;
            setResult(`Time to travel: ${time.toFixed(2)} hours.`)
        } else {
            setResult("Please enter valid information. (Numbers for distance and speed)")
        }
    };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="distance">Distance:</label>
          <input
            type="number"
            value={distance}
            placeholder="Enter distance in miles..."
            onChange={handleDistanceChange}
          />
        </section>
        <section>
          <label htmlFor="speed">Speed:</label>
          <input
            type="number"
            value={speed}
            placeholder="Enter average speed in MPH..."
            onChange={handleSpeedChange}
          />
        </section>
        <button type="submit">Calculate</button>
      </form>
      <div className="output-box">
        {result}
      </div>
    </>
  );
};

export default Calculator;
