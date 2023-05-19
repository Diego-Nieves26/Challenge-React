// ----------------------------------------------------------

// CSS
import classesStyles from "./SecondaryButtonStyles.module.css";

export default function SecondaryButton({ label, action }) {
  const { secondary__button } = classesStyles;

  return (
    <button className={secondary__button} onClick={action}>
      {label}
    </button>
  );
}
