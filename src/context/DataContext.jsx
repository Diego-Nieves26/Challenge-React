import { createContext, useState } from "react";

// --------------------------------------------------------------------

const initialQuestions = [
  {
    label: "¿Cual fue tu video juego favorito durante tu infancia?",
    id: 1,
    video: null,
    videoLength: "0:00",
    isCompleted: false,
  },
  {
    label: "¿Cuál es tu comida favorita y por qué?",
    id: 2,
    video: null,
    videoLength: "0:00",
    isCompleted: false,
  },
  {
    label: "¿Cuál es tu película favorita y por qué?",
    id: 3,
    video: null,
    videoLength: "0:00",
    isCompleted: false,
  },
  {
    label: "¿Cuál es tu libro favorito y qué te gusta de él?",
    id: 4,
    video: null,
    videoLength: "0:00",
    isCompleted: false,
  },
];

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [questionsIsCompleted, setQuestionsIsCompleted] = useState(false);
  const [questions, setQuestions] = useState(initialQuestions);

  const updateListQuestions = (questionId, url, time) => {
    const questionIndex = questions.findIndex(
      (elem) => elem.id === +questionId
    );
    const question = questions.find((elem) => elem.id === +questionId);

    if (questionIndex !== -1) {
      question.video = url;
      question.isCompleted = true;
      question.videoLength = time;

      initialQuestions[questionIndex] = question;
      setQuestions(initialQuestions);
    }
  };

  return (
    <DataContext.Provider
      value={{
        questions,
        questionsIsCompleted,
        updateListQuestions,
        setQuestionsIsCompleted,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
