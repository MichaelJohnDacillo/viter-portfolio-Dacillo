import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// eme
import Home from "./components/pages/home/Home";
import About from "./components/pages/home/about/About";
import Projects from "./components/pages/home/projects/Projects";
import PageNotFound from "./components/partials/PageNotFound";
function App() {
  return (
    <>
        <Home/>
    </>
  );
};

export default App;
