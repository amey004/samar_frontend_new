import React,{useContext} from "react"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import NavBar from "./NavBar";
import LandingPage from "./pages/homepage";
import Login from './pages/login';
import Register from './pages/register';
import FaqsAndPolicies from './pages/faqs_and_policies';
import ViewReport from './pages/report_template';
import ErrorPage from './pages/error';
import ReportSuggest from "./pages/report_suggest";
import DeveloperDashboard from "./pages/dev_dashboard";
import GovernmentDashboard from "./pages/govt_dashboard";
import Map from "./pages/kepler/maps";
import AuthContext from "./context/AuthContext";


function App() {
  const {role,loggedIn} = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/faq" element={<FaqsAndPolicies />} /> */}
          <Route path="/report" element={<ReportSuggest />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/detailed-report" element={<ViewReport/>}/>
          <Route path="/govt-dashboard" element={<GovernmentDashboard />} />
          {loggedIn && role === "developer" ? (
            <Route path="/dev-dashboard" element={<DeveloperDashboard />} />
          ) : (
            <Route path="/dev-dashboard" element={<ErrorPage />} />
          )}
          {loggedIn && role === "authority" ? (
            <Route path="/govt-dashboard" element={<GovernmentDashboard />} />
          ) : (
            <Route path="/govt-dashboard" element={<ErrorPage />} />
          )}
          {/* <Route path="/map" element={<Map />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
