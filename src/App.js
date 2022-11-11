import { Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Application from "./pages/application/Application";
import Home from "./pages/home/Home";
import Issue from "./pages/issue/Issue";
import IssueList from "./pages/issueList/IssueList";
import LogIn from "./pages/login/LogIn";
import StudentReg from "./pages/registration/student";
import { UserProvider } from "./utils/userContext";
import Navbar from "./components/navbar/Navbar"
import ProvostReg from "./pages/registration/provost/provost";
import AdministrationReg from "./pages/registration/administrationReg/administrationReg";
import DeptHead from "./pages/registration/dept_head/deptHead";
import Footer from "./components/footer/Footer"
import AppliList from "./pages/application_list/appliList";
import RoomAssign from "./pages/assign_room/RoomAssign";
import Resident from "./pages/resident/resident";

function App() {
  return ( 
    <>
      <UserProvider>
        <Navbar />
        <Routes>
          
          {/* public */}
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="application-list" element={<AppliList />} />

          {/* sign up page */}
          <Route path="registration" element={<StudentReg />} />
          <Route path="provostReg" element={<ProvostReg />} />
          <Route path="administrationReg" element={<AdministrationReg />} />
          <Route path="dept_headReg" element={<DeptHead />} />
          {/* private students*/}
          <Route path="application" element={<Application />} />
          <Route path="/issue" element={<Issue />} />
          {/* Payment page */}

          {/* private authority */}
          <Route path="/issue_list" element={<IssueList />} />
          {/* payment approve page */}
          {/* notice page */}
          {/* room details page and edit page */}
          <Route exact path="room-assign" component={AppliList} element={<RoomAssign />} />
          <Route path="resident" element={<Resident />} />

          {/* private department_head */}
          {/* application list for approve by dept head */}
        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
