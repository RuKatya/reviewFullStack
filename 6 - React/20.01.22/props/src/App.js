import React from 'react';
import Task from './Task';

function App() {
  const list = [
    { task: "Sleep", description: "text" },
    { task: "Run", description: "text1" },
    { task: "Cook", description: "text2" },
    { task: "Have fun", description: "text3" },
  ]

  return (
    <div >
      <h1>Hi</h1>
      <div>{list.map(item =>
        <Task item={item} />
      )}</div>
    </div>
  );
}

export default App;
