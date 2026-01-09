import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
return(
  <h1>hello world</h1>
)
}

// export default App;



function App1(){
  const [count, setCount]= useState(0);
  return <button onClick={()=> setCount(count+1)}>Count{count}</button>
}

// export default App1;



function Name(){
  const [name, setName]= useState("");

return <>
<input onChange = {e=> setName(e.target.value)} />
<p>{name}</p>
</>
}

// export default Name;



function List(){
  const items=["Java", "sql", "mongodb", "docker"];
  return <ul>{items.map(i=><li key = {i}>{i}</li>)}</ul>
}
// export default List;


// props example

function Child({name}){
  return <h2>Helloo {name}</h2>
}

function Parent (){
  return <Child name = "Lessi BABY" />; 
}

export default Parent;


function LOGIN() {
  const isLogin = false;
  return <h1>{isLogin ? "Welcome" : "Please Login"}</h1>;
}
// export default LOGIN;




function show() {
  const [show, setShow] = useState(false);
  return <>
    <button onClick={() => setShow(!show)}>Toggle</button>
    {show && <p>Hello React</p>}
  </>;
}
// export default show;
