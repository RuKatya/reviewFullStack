import { useEffect, useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [number, setNumber] = useState(8)

  return (
    <div className="App">
      <About getNumber={number} setNumber={setNumber} />
      <Contact getNumber={number} />
    </div>
  );
}

export default App;