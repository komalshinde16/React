import { useState } from 'react'

import './App.css'




function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
export default Counter;


function Add(){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    return(
        <>
        < input type='number' onChange={e => setA(+e.target.value)}/>
        < input type='number' onChange={e => setB(+e.target.value)}/>
        <p>sum : {a+b}</p>
        </>
    );
    


}
export default Add;



function Click(){
  const[count, setCount ] = useState(0);
  return(
    <>
    <button onClick ={()=> setCount(count+1) }>click</button>
    <p>Click: {count}</p>
    </>
  );
}
export default Click;


function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      height: "100vh",
      width : "100%"
    }}>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
}
export default Theme;


function Color() {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const [bg, setBg] = useState("white");

  return (
    <>
      <div style={{ height: 100, background: bg }}></div>
      {colors.map(c => (
        <button key={c} onClick={() => setBg(c)}>{c}</button>
      ))}
    </>
  );
}
export default Color;




function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello, World!</p>}
    </>
  );
}
export default Toggle;