import { Button, TextField } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import { useEffect, useRef, useState } from "react";
export default function About() {
  const [write, setWrite] = useState("");
  const [write2, setWrite2] = useState("");
  const [counter, setCounter] = useState(0);

  const netef = useRef(null);
  function handleChange(e) {
    setWrite(e.target.value);
  }
  function handleChange2(e) {
    setWrite2(e.target.value);
  }

  useEffect(() => {
    console.log("Hello");
    console.log(netef.current);
  }, [write, write2]);

  return (
    <div>
      <Navbar />
      <TextField onChange={handleChange} />
      <p ref={netef}>You wrote: {write}</p>
      <TextField onChange={handleChange2} />
      <p>You wrote2: {write2}</p>
      <Button
        onClick={() => {
          setCounter((current) => current + 1);
          setCounter((current) => current + 1);
        }}
      >
        +
      </Button>
      <p>Counter: {counter}</p>
      <Button onClick={() => setCounter(counter - 1)}>-</Button>
    </div>
  );
}
