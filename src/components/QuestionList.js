import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({ questions, setQuestions }) {

  const mappedQuestions = questions.map((question) => {
    return <QuestionItem question={question} key={question.id} setQuestions={setQuestions} />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{mappedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
