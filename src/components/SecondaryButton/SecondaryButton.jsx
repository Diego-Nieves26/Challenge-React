import PropTypes from "prop-types";

// ----------------------------------------------------------

// CSS
import classesStyles from "./SecondaryButtonStyles.module.css";

SecondaryButton.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func,
};

export default function SecondaryButton({ label, action }) {
  const { secondary__button } = classesStyles;

  return (
    <button className={secondary__button} onClick={action}>
      {label}
    </button>
  );
}
