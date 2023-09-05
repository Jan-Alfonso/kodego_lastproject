import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/Main";
import SignInSide from "./components/Login";
import AboutUs from "./components/AboutUsPage";
import Games from "./components/GamesPage";
import WhatsNew from "./components/WhatsNewPage";
import NavAppBar from "./components/AppBar";

function App() {
  const isAuthenticated = localStorage.getItem("login_token");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<SignInSide />} />
           {/* <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          /> */}
          <Route
            path="/dashboard"
            element={<Dashboard/>}
          />
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/games"
            element={<Games />}
          />
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
          <Route
            path="/news"
            element={<WhatsNew />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
