import { useNavigate, useParams } from "react-router-dom";

// ----------------------------------------------------------
import { ProgressTimer, RecordButton, SecondaryButton } from "../../components";
import { questions } from "../../data";

// CSS
import classesStyles from "./RecordingPage.module.css";

export default function RecordingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { video_container, video_header, video_body } = classesStyles;
  const questionData = questions.filter((question) => question.id === +id)[0];

  const _handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="limit-width">
      <SecondaryButton label="Volver" action={_handleGoHome} />
      <article className={video_container}>
        <div className={video_header}>
          <ProgressTimer />
          <RecordButton spacing="1rem" />
        </div>
        <div className={video_body}>
          <h2>{questionData.label}</h2>
        </div>
      </article>
      <div className="flex-row">
        <SecondaryButton label="Atras" />
        <SecondaryButton label="Siguiente" />
      </div>
    </div>
  );
}
