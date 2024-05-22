import { useState } from 'react';
import './App.css';
import { decrement, increment, incrementByAmount, selectCount, setValueZero } from "./app/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectText } from './app/textField/textSlice';

function App() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [newAmount, setNewAnount] = useState<number>(0)
  // console.log(`new Amount: ${newAmount}`)


  return (
    <main>
      <h2>Number Reducer</h2>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Add more</button>
      <button onClick={() => dispatch(setValueZero())}>set zore</button>
      <button onClick={() => dispatch(decrement())}>Minus 1</button>
      <div>
        <input type="number" defaultValue={newAmount} onChange={(ev: any) => setNewAnount(ev.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(newAmount)))}>Add new Amount</button>
      </div>

    </main>
  )
}

export default App;
