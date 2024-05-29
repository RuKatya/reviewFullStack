import { useState } from 'react'
import "./App.css"
import { decrement, decrementByAmount, increment, incrementByAmount, selectorCaunter, setZero } from "./features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { addTextNew, clearText, newText, selectText } from './features/textField/textSlice'
import ListOfTasks from './Component/ListOfTasks'

function App () {

  const count = useAppSelector(selectorCaunter)
  const dispatch = useAppDispatch()
  const [ newAmount, setNewAmount ] = useState<number>(0)
  const text = useAppSelector(selectText)
  const [ newInputText, setNewInputText ] = useState<string>('')
  const [ addText, setAddText ] = useState<string>('')

  const numberFromUser = (event) => {
    setNewAmount(event.target.value)
  }

  const inputChange = (event) => {
    setNewInputText(event.target.value)
  }

  const addTextToText = (event) => {
    setAddText(event.target.value)
  }

  return (
    <div className="App">
      {/* <h2> My Work </h2>
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

      <div>
        <input onChange={inputChange} type="text" name="text" placeholder="Enter your text" />
        <button onClick={() => dispatch(newText(newInputText))}>New Text</button>
        <button onClick={() => dispatch(clearText())}>Clear Text</button>
        <input onChange={addTextToText} type="text" />
        <button onClick={() => dispatch(addTextNew(addText))}>Add Text</button>
      </div> */}
      <ListOfTasks/>
  
    </div>
  )
}

export default App;
