import React, { useState } from "react";
import "./Timer.css";
import { Hour } from "../../Types/Types";
import Button from "../../components/Button/Button";

const Timer = () => {
  const [disable, setDisable] = useState(false);
  let [hours, setHours] = useState<Hour>(0);
  let [minutes, setMinutes] = useState<Hour>(0);
  let [seconds, setSeconds] = useState<Hour>(0);
  let [access, setAccess] = useState<any>();
  let start = () => {
    setDisable(true);
    setAccess(
      setInterval(() => {
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
          setMinutes(minutes);
        } else if (minutes > 59) {
          seconds = 0;
          minutes = 0;
          hours++;
          setHours(hours);
        } else {
          setSeconds(seconds);
          seconds += 1;
        }
      }, 1000)
    );
  };
  const pause = () => {
    setDisable(false);
    clearInterval(access);
  };
  const Reset = () => {
    setDisable(false);
    clearInterval(access);
    setSeconds(0);
    setHours(0);
    setMinutes(0);
  };
  return (
    <div className="timeBox">
      <span>
        <span className="codes">
          {hours < 10 }
          {hours}
        </span>
        <span className="codes"> 
          {minutes < 10 }
          {minutes}
        </span>
        <span className="codes">
          {seconds < 10}
          {seconds}
        </span>
      </span>
      <div>
        <div className="allButtons">
          {disable ? (
            <Button title="Start" click={start} disable={disable} />
          ) : (
            <Button title="Start" click={start} disable={false} />
          )}
          <Button title="Pause" click={pause} disable={false} />
          <Button title="Reset" click={Reset} disable={false} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
