import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// ----------------------------------------------------------
import { PrimaryButton, VideoCard } from "../../components";
import useDataContext from "../../hooks/useDataContext";

// CSS
import "swiper/css";
import classesStyles from "./HomeStyles.module.css";

export default function HomePage() {
  const { header, button__container } = classesStyles;
  const { questions, setQuestionsIsCompleted } = useDataContext();

  useEffect(() => {
    if (
      questions.every(
        (objeto) =>
          objeto.hasOwnProperty("isCompleted") && objeto["isCompleted"] === true
      )
    ) {
      setQuestionsIsCompleted(true);
    }
  }, [questions, setQuestionsIsCompleted]);

  return (
    <div className="limit-width">
      <header className={header}>
        <h1>Video Cuestionario</h1>
      </header>
      <main>
        <Swiper
          slidesPerView={window.innerWidth <= 768 ? 2 : 4}
          spaceBetween={20}
        >
          {questions.map((question) => {
            return (
              <SwiperSlide key={question.id}>
                <VideoCard data={question} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </main>
      <div className={button__container}>
        <PrimaryButton label="Enviar" />
      </div>
    </div>
  );
}
