import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList(props) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          props.questions.map((question, index) => (
            <QuestionItem key={question.id} question={question} API_URL={props.API_URL} onDelete={props.onDelete}></QuestionItem>
          ))  
        }
      </ul>
    </section>
  );
}

export default QuestionList;
