import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// ----------------------------------------------------------

// CSS
import classesStyles from "./ProgressTimerStyles.module.css";

ProgressTimer.propTypes = {
  getUpdaters: PropTypes.func,
  time: PropTypes.string,
};

export default function ProgressTimer({ getUpdaters, time }) {
  const [timerRuns, setTimerRuns] = useState(false);
  // const [time, setTime] = useState("0:00");
  const { progress__timer_container, active } = classesStyles;

  useEffect(() => {
    getUpdaters(setTimerRuns);
  }, [getUpdaters]);

  return (
    <div className={progress__timer_container}>
      <p>{time} / 2:00</p>
      <span
        className={timerRuns ? active : ""}
        style={{ "--circle-color": timerRuns ? "red" : "#c4c4c450" }}
      ></span>
    </div>
  );
}
