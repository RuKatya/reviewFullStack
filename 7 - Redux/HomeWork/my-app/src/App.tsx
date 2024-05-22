import { useState } from 'react'
import "./App.css"
import { decrement, decrementByAmount, increment, incrementByAmount, selectorCaunter, setZero } from "./features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { selectText } from './features/textField/textSlice'

function App () {

  const count = useAppSelector(selectorCaunter)
  const dispatch = useAppDispatch()
  const [ newAmount, setNewAmount ] = useState<number>(0)
  const text = useAppSelector(selectText)
console.log(text)

  const numberFromUser = (event) => {
    setNewAmount(event.target.value)
  }

  return (
    <div className="App">
      <h2> My Work </h2>
    <div>Calculate</div>
      <div>{count}</div>
      <input onChange={numberFromUser} type="number" name="userNumber" placeholder="Enter your number" />
      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
      <button onClick={() => dispatch(incrementByAmount(newAmount))}>Multuply</button>
      <button onClick={() => dispatch(decrementByAmount(newAmount))}>Devision</button>
      <button onClick={() => dispatch(setZero())}>Set zero</button>



      <h1>Text Reducer</h1>
      <div>
        {text}
      </div>
      
      <ol>
        <li>Create an input</li>
        <li>Create new useState</li>
        <li>Update the useState through function (like numberFromUser)</li>
        <li>In the textSlice create a new reducer that update the value of the slice</li>
        <li>use useAppDespatch to update the value from react</li>
      </ol>
    </div>
  )
}

export default App;
