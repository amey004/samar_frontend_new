import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import NavBar from "./NavBar";
import LandingPage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
