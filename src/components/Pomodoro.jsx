import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) =>
    props.color ? "rgba(255, 113, 73, 0.715)" : "rgba(93, 143, 242, 0.715)"};
  margin-bottom: 20px;
  width: 45%;
  margin-top: 20px;
  border-radius: 15px;
  padding-bottom: 10px;
`;
const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [state, setState] = useState(true);
  // start function
  if (Notification.permission === "default") {
    var permission = Notification.requestPermission().then((response) => {
      return response;
    });
  }

  const handleStart = () => {
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    var max_min = minutes;
    var max_sec = seconds;
    if (state) {
      window.intervel = setInterval(() => {
        if (max_min <= 0 && max_sec <= 0) {
          clearInterval(window.intervel);
          handleNext();
          audio.play();
          if (Notification.permission === "granted") {
            const notification = new Notification("A new message from Adeen!", {
              body: "Congrats you have completed the work time now take a break!!",
              icon: "http://circleofdocs.com/wp-content/uploads/2015/12/icon256.png",
            });
          } else {
            alert(
              "Congrats you have completed the work time now take a break!!"
            );
          }
        } else {
          if (max_sec <= 0) {
            setMinutes(--max_min);
            setSeconds(59);
            max_sec = 59;
          } else {
            setSeconds(--max_sec);
          }
        }
      }, 1000);
    } else {
      window.intervel = setInterval(() => {
        if (max_min <= 0 && max_sec <= 0) {
          clearInterval(window.intervel);

          handleNext();
          audio.play();
          if (Notification.permission === "granted") {
            const notification = new Notification("A new message from Adeen!", {
              body: "You have completed the break now its time for focus :)",
              icon: "http://circleofdocs.com/wp-content/uploads/2015/12/icon256.png",
            });
          } else {
            alert(
              "You have completed the break time now its time for focus :)"
            );
          }
        } else {
          if (max_sec <= 0) {
            setMinutes(--max_min);
            setSeconds(59);
            max_sec = 59;
          } else {
            setSeconds(--max_sec);
          }
        }
      }, 1000);
    }
  };
  // handle reset
  const handleReset = () => {
    if (state) {
      clearInterval(window.intervel);
      setMinutes(25);
      setSeconds(0);
    } else {
      clearInterval(window.intervel);
      setMinutes(5);
      setSeconds(0);
    }
  };

  const handleNext = () => {
    if (state) {
      clearInterval(window.intervel);
      setState(false);
      setMinutes(5);
      setSeconds(0);
    } else {
      clearInterval(window.intervel);
      setState(true);
      setMinutes(25);
      setSeconds(0);
    }
  };

  return (
    <div className="pomodoro-container" id="pomodoro-container">
      <h1 className="pomodoro-title">Pomodoro Timer</h1>

      <Container color={state}>
        <div className="timer">
          <div className="minutes">
            <h1 style={{ fontSize: "50px" }}>
              {" "}
              {minutes < 10 ? `0${minutes}` : `${minutes}`}
            </h1>
          </div>
          <span className="time-divider">:</span>
          <div className="seconds">
            <h1 style={{ fontSize: "50px" }}>
              {seconds < 10 ? `0${seconds}` : `${seconds}`}
            </h1>
          </div>
        </div>
        <div className="button-container">
          <button className="btn-info btn" onClick={() => handleReset()}>
            <h2>Reset</h2>
          </button>
          <button className="btn btn-warning " onClick={() => handleStart()}>
            <h2>Start</h2>
          </button>

          <button className="btn-success btn" onClick={() => handleNext()}>
            <h2>Next</h2>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Pomodoro;
