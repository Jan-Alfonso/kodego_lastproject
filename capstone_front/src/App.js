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
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/games"
            element={isAuthenticated ? <Games /> : <Navigate to="/login" />}
          />
          <Route
            path="/about-us"
            element={isAuthenticated ? <AboutUs /> : <Navigate to="/login" />}
          />
          <Route
            path="/news"
            element={isAuthenticated ? <WhatsNew /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
