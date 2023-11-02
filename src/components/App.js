import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

const API_URL='http://localhost:4000/questions'
function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  //function to delete question
  const deleteQuestion = ((id)=>{
    const deletedQuiz = questions.filter((question) => question.id !== id)
    setQuestions(deletedQuiz)
  })
  //function to add question
  const handleFormSubmit = ((data)=>{
    const updatedQuiz = [...questions,data]
    setQuestions(updatedQuiz)
  })

  useEffect(()=>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [setQuestions])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm API_URL={API_URL} onFormSubmit={handleFormSubmit}/> : <QuestionList questions={questions} API_URL={API_URL} onDelete={deleteQuestion}/>}
    </main>
  );
}

export default App;
