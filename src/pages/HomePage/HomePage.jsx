// ----------------------------------------------------------
import { PrimaryButton, VideoCard } from "../../components";
import { questions } from "../../data";

// CSS
import classesStyles from "./HomeStyles.module.css";

export default function HomePage() {
  const { header, button__container } = classesStyles;

  return (
    <div className="limit-width">
      <header className={header}>
        <h1>Video Cuestionario</h1>
      </header>
      <main className="flex-row">
        {questions.map((question) => {
          return <VideoCard data={question} key={question.id} />;
        })}
      </main>
      <div className={button__container}>
        <PrimaryButton label="Enviar" />
      </div>
    </div>
  );
}
