import { useEffect, useState } from 'react'
import axios from 'axios';
import QuestionCard from './components/QuestionCard';
import './style/index.scss'
import CodeExample from './components/CodeExample';

function App() {
  const [questions, setQuestions] = useState([])
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/get-all-questions')

      const { ok, questions, error } = data

      if (error) throw new Error(error)

      if (ok) {
        setQuestions(questions)
      }
    }

    getData()
  }, [])

  return (
    <div className="mainPage">
      <header>
        <h1>Welcome to CSS exam</h1>
        <div>
          <p>Correct answers: {counter}</p></div>
      </header>

      <CodeExample />

      <div className="questionsPart">

        {
          questions.length > 0 ? <>
            {questions.map((item, i) => (
              <QuestionCard key={i} question={item} setCounter={setCounter} />
            ))}
          </> :
            <div>Loading</div>
        }
      </div>
    </div>
  );
}

export default App;
