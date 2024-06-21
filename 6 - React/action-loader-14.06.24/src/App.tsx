import { Link, Outlet, useNavigation } from 'react-router-dom'
import './App.css'

function App() {
  const navigation = useNavigation();
  console.log(navigation.state)
  
  return (
    <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/item/Apple">Apple</Link>
          <Link to="/item/Banana">Banana</Link>
        </nav>
        <main>
          <Outlet />
        </main>
        
    </>
  )
}

export default App
