import { useEffect, useState } from "react";

function App() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/question/list").then((response) => {
      response.json().then((json) => {
        setQuestionList(json);
      });
    });
  }, []);

  let content = "loading...";

  console.log('log', questionList)

  if (questionList.length > 0) {
    content = questionList.map((question) => {
      return <li key={question.id}>{question.subject}</li>
    })
  }

  return <div>{content}</div>;
}

export default App;
