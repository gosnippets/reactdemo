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
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./routersExample/Home";
import About from "./routersExample/About";
import PageNotFound from "./routersExample/PageNotFound";
import Layout from "./routersExample/Layout";
import Blog from "./routersExample/Blog";
import BlogDetails from "./routersExample/BlogDetails";
import AccountList from "./routersExample/accounts/AccountList";
import AccountLayout from "./routersExample/accounts/AccountLayout";
import AddNewAccount from "./routersExample/accounts/AddNewAccount";
import EditAccountDetails from "./routersExample/accounts/EditAccountDetails";
import AccountDetails from "./routersExample/accounts/AccountDetails";
import StateLessComponent from "./StateAndProps/StateLessComponent";
import StateFullComponent from "./StateAndProps/StateFullComponent";
import HighOrderComponent from "./StateAndProps/HighOrderComponent";
import StateAndPropsExample from "./ClassComponents/StateAndPropsExample";
import FormExample from "./ClassComponents/FormExample";
import ConstructorAndRender from "./LifecycleMethods/ConstructorAndRender";
import ComponentDidMountExample from "./LifecycleMethods/ComponentDidMountExample";
import GetDerivedStateFromPropsExample from "./LifecycleMethods/GetDerivedStateFromPropsExample";
import ShouldComponentUpdateExample from "./LifecycleMethods/ShouldComponentUpdateExample";
import GetSnapshotBeforeUpdateExample from "./LifecycleMethods/GetSnapshotBeforeUpdateExample";
import ComponentDidUpdateExample from "./LifecycleMethods/ComponentDidUpdateExample";
import ComponentWillUnmountExample from "./LifecycleMethods/ComponentWillUnmountExample";
import ComponentDidCatchExample from "./LifecycleMethods/ComponentDidCatchExample";
import FunctionFormikExample from "./formik/FunctionFormikExample";
import ClassFormikExample from "./formik/ClassFormikExample";
import FunctionFormikExample2 from "./formik/FunctionFormikExample2";

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

    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />}>
            <Route path=":postid" element={<BlogDetails />} />
          </Route>
          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<AccountList />} />
            <Route path="new" element={<AddNewAccount />} />
            <Route path=":accountid" element={<AccountDetails />} />
            <Route path="edit/:accountid" element={<EditAccountDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter> */}

    {/* <Router>
      <Switch>
         <Route exact path="/" component={<Home />} />
         <Route path="/about" component={<About />} />
      </Switch>
    </Router> */}

    {/* <StateLessComponent/> */}
    {/* <StateFullComponent/> */}
    {/* <HighOrderComponent/> */}
    {/* Class components example  */}
    {/* <StateAndPropsExample/> */}
    {/* <FormExample /> */}

    {/* Lifecycle Method  */}
    {/* <ConstructorAndRender/> */}
    {/* <ComponentDidMountExample/> */}
    {/* <GetDerivedStateFromPropsExample/> */}
    {/* <ShouldComponentUpdateExample/> */}
    {/* <GetSnapshotBeforeUpdateExample/> */}
    {/* <ComponentDidUpdateExample /> */}
    {/* <ComponentWillUnmountExample /> */}
    {/* <ComponentDidCatchExample/> */}
    {/* <FunctionFormikExample/> */}
    {/* <ClassFormikExample/> */}
    <FunctionFormikExample2/>
  </>);
}

export default App;
