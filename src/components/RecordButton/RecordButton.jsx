import PropTypes from "prop-types";

// ----------------------------------------------------------

// CSS
import classesStyles from "./RecordButtonStyles.module.css";

RecordButton.propTypes = {
  spacing: PropTypes.string,
  btnPhase: PropTypes.string,
  setBtnPhase: PropTypes.func,
  btnPhases: PropTypes.object,
  _handleInitFilm: PropTypes.func,
  _handleStopFilm: PropTypes.func,
  _handleReloadFilm: PropTypes.func,
};

export default function RecordButton({
  spacing = ".5rem",
  btnPhase,
  setBtnPhase,
  btnPhases,
  _handleInitFilm,
  _handleStopFilm,
  _handleReloadFilm,
}) {
  // const [btnPhase, setBtnPhase] = useState(btnPhases.play);
  const { record__button, record__button_container } = classesStyles;

  const _handleActionReconrding = () => {
    if (window.location.pathname === "/") return;

    if (btnPhase == btnPhases.play) {
      setBtnPhase(btnPhases.stop);
      _handleInitFilm();
    }
    if (btnPhase == btnPhases.stop) {
      setBtnPhase(btnPhases.reload);
      _handleStopFilm();
    }
    if (btnPhase == btnPhases.reload) {
      setBtnPhase(btnPhases.stop);
      _handleReloadFilm();
    }
  };

  return (
    <div className={record__button_container} style={{ "--spacing": spacing }}>
      <button
        className={`${record__button} flex-center`}
        onClick={_handleActionReconrding}
      >
        <img src={btnPhase} />
      </button>
    </div>
  );
}
