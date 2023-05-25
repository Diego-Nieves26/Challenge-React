import { useNavigate, useParams } from "react-router-dom";

// ----------------------------------------------------------
import Assets from "../../assets";
import { ProgressTimer, RecordButton, SecondaryButton } from "../../components";
import useDataContext from "../../hooks/useDataContext";
import { InitClock, ReloadClock, StopClock } from "../../utils/Counter";
import IdentifyPageToChange from "../../utils/IdentifyPageToChange";
import {
  InitFilm,
  PlayFilm,
  ResetContainerVideo,
  SaveFilm,
  StopFilm,
} from "../../utils/ToFilm";

// CSS
import { useEffect, useState } from "react";
import classesStyles from "./RecordingPage.module.css";

const btnPhases = {
  play: Assets.PlayIcon,
  stop: Assets.StopIcon,
  reload: Assets.ReloadIcon,
};

export default function RecordingPage() {
  const { questions, updateListQuestions } = useDataContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const { video_container, video_header, video_body } = classesStyles;
  const questionData = questions.filter((question) => question.id === +id)[0];
  const [time, setTime] = useState("0:00");
  const [btnPhase, setBtnPhase] = useState(btnPhases.play);
  let updaterTimerRuns;

  const _handleGoHome = () => {
    navigate("/");
  };

  const _handleChangeQuestion = (direction) => {
    const newId = IdentifyPageToChange(questions, direction, +id);

    navigate(`/recording/${newId}`);
  };

  const _handleInitFilm = () => {
    let counterTime = 0;
    InitFilm(id);
    InitClock(updaterTimerRuns, setTime);

    const interval = setInterval(() => {
      if (counterTime === 120) {
        _handleStopFilm("2:00");
        clearInterval(interval);
      }
      counterTime++;
    }, 1000);
  };

  const _handleStopFilm = (timeLength = time) => {
    StopClock(updaterTimerRuns, setTime);
    StopFilm();
    setTimeout(() => {
      const url = SaveFilm();

      updateListQuestions(id, url, timeLength);
      PlayFilm(url, id);
    }, 1000);
  };

  const _handleReloadFilm = () => {
    ReloadClock(setTime, "00:00");
    InitFilm();
    InitClock(updaterTimerRuns, setTime);
  };

  const getUpdatersTimes = (one) => {
    updaterTimerRuns = one;
  };

  useEffect(() => {
    ReloadClock(setTime, questionData.videoLength);

    if (questionData.video === null) {
      ResetContainerVideo(id);
      setBtnPhase(btnPhases.play);
    }
  }, [questionData.video, questionData.videoLength, id, setTime]);

  return (
    <div className="limit-width">
      <SecondaryButton label="Volver" action={_handleGoHome} />
      <article className={video_container}>
        <div className={video_header}>
          <video
            src={questionData.video}
            id={`gum-local-${id}`}
            autoPlay
            playsInline
          />
          <ProgressTimer getUpdaters={getUpdatersTimes} time={time} />
          <RecordButton
            spacing="1rem"
            btnPhase={btnPhase}
            setBtnPhase={setBtnPhase}
            btnPhases={btnPhases}
            _handleInitFilm={_handleInitFilm}
            _handleStopFilm={_handleStopFilm}
            _handleReloadFilm={_handleReloadFilm}
          />
        </div>
        <div className={video_body}>
          <h2>{questionData.label}</h2>
        </div>
      </article>
      <div className="flex-row">
        <SecondaryButton
          label="Atras"
          action={() => _handleChangeQuestion("prev")}
        />
        <SecondaryButton
          label="Siguiente"
          action={() => _handleChangeQuestion("next")}
        />
      </div>
    </div>
  );
}
