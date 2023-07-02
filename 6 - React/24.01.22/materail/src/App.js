import React from 'react';
import { List } from './ListBuy';
import Item from './components/Item';

function App() {
  console.log(List)

  return (
    <div>
      {List.map((item, index) => {
        return <Item
          key={item.id}
          // key={index}
          item={item}
        />
      })}
    </div>
  );
}

export default App;
