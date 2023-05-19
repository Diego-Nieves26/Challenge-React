// ----------------------------------------------------------
import Assets from "../../assets";

// CSS
import classesStyles from "./RecordButtonStyles.module.css";

export default function RecordButton({ spacing = ".5rem" }) {
  const { record__button } = classesStyles;

  return (
    <button
      className={`${record__button} flex-center`}
      style={{ "--spacing": spacing }}
    >
      <img src={Assets.PlayIcon} />
    </button>
  );
}
