import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import AdditionSubtraction from "./components/AdditionSubtraction";
import RegisterComponent from "./StateAndProps/RegisterComponent";
import StateExample from "./StateAndProps/StateExample";
import ConditionalComponent from "./Conditional/ConditionalComponent";
import ReuseableComponent from "./reuseable/ReuseableComponent";
import ReactHooks from "./ReactHooks/ReactHooks";
import BootstrapExamples from "./Bootstrap/BootstrapExamples";
import MaterialUI from "./mui/MaterialUI";
import FetchExample from "./API_Fetch_Axios/FetchExample";

function App() {
  return (<>
    {/* <Counter />
    <AdditionSubtraction/> */}
    {/* <h2>This is App component...</h2> */}
    {/* <RegisterComponent/> */}
    {/* <StateExample/> */}
    {/* <ConditionalComponent/> */}
    {/* <ReuseableComponent/> */}
    {/* <ReactHooks/> */}
    {/* <BootstrapExamples /> */}
    {/* <MaterialUI/> */}
    <FetchExample/>
  </>);
}

export default App;
