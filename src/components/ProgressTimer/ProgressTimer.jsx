// ----------------------------------------------------------

// CSS
import classesStyles from "./ProgressTimerStyles.module.css";

export default function ProgressTimer() {
  const { progress__timer_container } = classesStyles;

  return (
    <div className={progress__timer_container}>
      <p>1:30 / 2:00</p>
      <span style={{ "--circle-color": "#c4c4c450" }}></span>
    </div>
  );
}
