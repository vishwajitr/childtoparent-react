import "./styles.css";
import Child from "./Child";
import { useState } from "react";

export default function App() {
  const [name, setData] = useState("Ram");
  console.log(name);
  const senddata = (name) => {
    setData(name);
    console.log(name);
  };
  return (
    <div className="App">
      <h1>Child to Paret Data Pass</h1>
      <Child senddata={senddata} />
      My name is {name}
    </div>
  );
}
