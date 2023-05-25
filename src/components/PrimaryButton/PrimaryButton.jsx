import PropTypes from "prop-types";

// ----------------------------------------------------------
import useDataContext from "../../hooks/useDataContext";

// CSS
import classesStyles from "./PrimaryButtonStyles.module.css";

PrimaryButton.propTypes = {
  label: PropTypes.string,
};

export default function PrimaryButton({ label }) {
  const { questionsIsCompleted } = useDataContext();
  const { primary__button } = classesStyles;

  const _handleSubmitForm = () => {
    alert("Envio Exitoso");
  };

  return (
    <button
      onClick={_handleSubmitForm}
      className={primary__button}
      style={{
        pointerEvents: questionsIsCompleted ? "all" : "none",
        opacity: questionsIsCompleted ? 1 : 0.8,
      }}
    >
      {label}
    </button>
  );
}
