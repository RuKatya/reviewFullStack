import './App.css';
import { selectCount } from "./app/counter/counterSlice";
import { useAppSelector } from "./app/hooks";

function App() {
  const count = useAppSelector(selectCount)
  return <main>
    <h2>Vite + Redux</h2>
    <div>{count}</div>
    <button>Add more</button>
  </main>
}

export default App;
