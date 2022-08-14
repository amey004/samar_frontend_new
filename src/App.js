import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import NavBar from "./NavBar";
import LandingPage from "./pages/homepage";
import Login from './pages/login';
import Register from './pages/register';
import FaqsAndPolicies from './pages/faqs_and_policies';
import ViewReport from './pages/report_template';
import ErrorPage from './pages/error';
import ReportSuggest from "./pages/report_suggest";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/faq" element={<FaqsAndPolicies/>}/>
          <Route path='/report' element={<ReportSuggest/>}/>
          <Route path='/error' element={<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
