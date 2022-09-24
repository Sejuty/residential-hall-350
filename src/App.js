import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "../src/Application"
import './assets/css/global.css';
import Navbar from "./components/Navbar";
import Issue from "./pages/issue/Issue";
function App() {
  return (
    <>

      <Navbar />
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="application" element={<Application />} />
          <Route path="/issue" element={<Issue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
