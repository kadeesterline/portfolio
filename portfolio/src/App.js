import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import NavBar from "./Components/NavBar";

function NavLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<NavLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
