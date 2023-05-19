// ----------------------------------------------------------

// CSS
import classesStyles from "./PrimaryButtonStyles.module.css";

export default function PrimaryButton({ label }) {
  const { primary__button } = classesStyles;

  return <button className={primary__button}>{label}</button>;
}
