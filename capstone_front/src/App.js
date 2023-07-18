import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./components/Main";
import SignInSide from "./components/Login";
import AboutUs from "./components/AboutUsPage";
import Games from "./components/GamesPage";
import WhatsNew from "./components/WhatsNewPage";

function App() {
  const isAuthenticated = localStorage.getItem("login_token");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<SignInSide />} />
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
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
