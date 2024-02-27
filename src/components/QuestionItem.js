import React from "react";

function QuestionItem({ question, setQuestions }) {


  function handleCorrectAnswerChange(newIndex) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correctIndex: parseInt(newIndex) }),
    })
      .then(() => {
        setQuestions((prevQuestions) => prevQuestions.map((q) => q.id === question.id ? { ...q, correctIndex: parseInt(newIndex) } : q))
      })
  }

  function onDeleteClick() {
    // console.log("DELETING:", question.id)

    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE"
    })
      .then((r) => r.json())
      .then(() => {
        setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== question.id))
      })


  }

  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleCorrectAnswerChange}>{options}</select>
      </label>
      <button onClick={onDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
