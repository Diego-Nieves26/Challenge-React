// ----------------------------------------------------------------------

export default function IdentifyPageToChange(questions, direction, currentId) {
  const currentQuestionIndex = questions.findIndex(
    (elem) => elem.id === currentId
  );
  const initialQuestionIndex = 0;
  const finalQuestionIndex = questions.length - 1;

  let newId;

  if (direction === "next") {
    if (currentQuestionIndex === finalQuestionIndex) {
      newId = questions.find((elem) => elem.isCompleted === false);
    } else {
      newId =
        questions.find(
          (elem, i) => elem.isCompleted === false && i > currentQuestionIndex
        ) ||
        (!questions[initialQuestionIndex].isCompleted
          ? questions[0]
          : questions.find((elem) => elem.isCompleted === false));
    }
  }

  if (direction === "prev") {
    const reverseList = questions.slice().reverse();
    const currentQuestionReverseIndex = reverseList.findIndex(
      (elem) => elem.id === currentId
    );

    if (currentQuestionIndex === initialQuestionIndex) {
      newId = reverseList.find((elem) => elem.isCompleted === false);
    } else {
      newId =
        reverseList.find(
          (elem, i) =>
            elem.isCompleted === false && i > currentQuestionReverseIndex
        ) ||
        (!questions[finalQuestionIndex].isCompleted
          ? questions[finalQuestionIndex]
          : questions[currentQuestionIndex]);
    }
  }

  return newId.id;
}
