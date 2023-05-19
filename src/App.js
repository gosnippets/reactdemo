import { useState } from "react";
// import About from "./components/About";
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
import AxiosExample from "./API_Fetch_Axios/AxiosExample";
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from "./routersExample/Home";
import About from "./routersExample/About";
import PageNotFound from "./routersExample/PageNotFound";
import Layout from "./routersExample/Layout";
import Blog from "./routersExample/Blog";
import BlogDetails from "./routersExample/BlogDetails";

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
    {/* <FetchExample/> */}
    {/* <AxiosExample /> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postid" element={<BlogDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

    {/* <Router>
      <Switch>
         <Route exact path="/" component={<Home />} />
         <Route path="/about" component={<About />} />
      </Switch>
    </Router> */}
  </>);
}

export default App;
