import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { selectCount } from './redux/counter/counterSlice';
import { useAppSelector } from './redux/hooks';

function App() {
  // const count = useSelector(selectCount);
  const count = useAppSelector(selectCount)
  //const [count, setCount] = useState(0)
   console.log(count);
  return <>Vite + Redux</>;
}

export default App;
