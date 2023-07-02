import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {plusFunc, minusFunc, resetFunc} from './store/actions'

//get a number
//+1 to the number
//-1 to the number
//reset
function NumberPage() {
  const num = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">  
      {num}
      <button onClick={()=>{dispatch(plusFunc)}}>+</button>
      <button onClick={()=>{dispatch(minusFunc)}}>-</button>
      <button onClick={()=>{dispatch(resetFunc)}}>reset</button>
      </header>
    </div>
  );
}

export default NumberPage;
