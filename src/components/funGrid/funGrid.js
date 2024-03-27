import { useState } from "react";
import "./funGrid.css";
export default function FunGrid() {
  const [count, setCount] = useState(new Array(9).fill(0));
  function handleClick(index) {
    const tmp = [...count];
    tmp[index]++;
    setCount(tmp);
  }
  return (
    <div className="fun-grid">
      {count.map((num, index) => (
        <div
          id={index}
          onClick={() => handleClick(index)}
          className="fun-grid-paragraph"
        >
          <p>{num}</p>
        </div>
      ))}
    </div>
  );
}
