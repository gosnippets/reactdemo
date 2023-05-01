import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import AdditionSubtraction from "./components/AdditionSubtraction";
import RegisterComponent from "./StateAndProps/RegisterComponent";
import StateExample from "./StateAndProps/StateExample";
import ConditionalComponent from "./Conditional/ConditionalComponent";
import ReuseableComponent from "./reuseable/ReuseableComponent";

function App() {
  return (<>
    {/* <Counter />
    <AdditionSubtraction/> */}
    {/* <h2>This is App component...</h2> */}
    {/* <RegisterComponent/> */}
    {/* <StateExample/> */}
    {/* <ConditionalComponent/> */}
    <ReuseableComponent/>
  </>);
}

export default App;
