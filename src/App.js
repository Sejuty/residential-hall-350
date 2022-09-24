import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./Application"
import './assets/css/global.css';
import Navbar from "./components/Navbar";
import Issue from "./pages/issue/Issue";
import LogIn from "../src/pages/LogIn"
import IssueList from "./pages/issueList/IssueList";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="application" element={<Application />} />
          <Route path="login" element={<LogIn />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/issue_list" element={<IssueList />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
