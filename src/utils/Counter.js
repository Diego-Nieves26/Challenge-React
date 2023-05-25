let interval;

export function InitClock(setTimerRuns, setTime) {
  let seconds = 0;
  let minutes = 0;
  setTimerRuns(true);

  const updateClock = () => {
    if (minutes === 2) {
      setTimerRuns(false);
      return;
    }
    if (seconds === 60 - 1) {
      minutes++;
      seconds = 0;
    }
    seconds++;

    const min = String(minutes).padStart(1, "0");
    const sec = String(seconds).padStart(2, "0");
    const time = `${min}:${sec}`;
    setTime(time);
  };
  interval = setInterval(updateClock, 1000);
}

export function StopClock(setTimerRuns) {
  clearInterval(interval);
  setTimerRuns(false);
}

export function ReloadClock(setTime, time) {
  setTime(time);
}
