import Home from "./Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Application from "../src/Application"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="application" element={<Application />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
