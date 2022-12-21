import "./App.css";

import { useEffect, useState } from "react";

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

export default function App() {
  const [list, setList] = useState([
    { id: Date.now(), number: 10 },
    { id: Date.now(), number: 15 },
  ]);

  const addNewItem = () => {
    setList([...list, { id: Date.now(), number: randomInteger(10, 30) }]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setList((prev) =>
        prev
          .filter((el) => el.number > 0)
          .map((item) => {
            return {
              ...item,
              number: item.number - 1,
            };
          })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [list]);

  return (
    <div className='App'>
      <button onClick={addNewItem}>добавить</button>
      <ul>
        {list.map((el, index) => (
          <li key={el.id}>
            {index + 1}. Исчезнет через {el.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
