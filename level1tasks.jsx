// ### 🔹 Task 1: Display a Heading using React
// **Goal:** Create a new React component named `App`. Inside this component, render an HTML `<h1>` tag with the text **“Hello React!”**
// This task helps you get comfortable with JSX and basic rendering.


// import React from "react";

function App() {
  return (
    <h1>Hello React!</h1>
  );
}

export default App;


// Greeting
import React from "react";

function Greeting() {
  return <p>Welcome to React!</p>;
}

export default Greeting;



// Welcome
import React from "react";

function Welcome(props) {
  return <p>Hello, {props.name}!</p>;
}

export default Welcome;
