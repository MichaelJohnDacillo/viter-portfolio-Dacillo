import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/pages/home/Home";
import Project1 from "./components/pages/home/project1/Project1";
import Project2 from "./components/pages/home/project2/Project2";
import PageNotFound from "./components/partials/PageNotFound";
import Contact from "./components/pages/home/contact/Contact";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
