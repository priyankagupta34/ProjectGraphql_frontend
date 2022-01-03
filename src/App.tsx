import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GetJobs } from "./services/graphql";
import NavBar from "./components/navbar";
import "./styles.css";
import AppRoutes from "./AppRoutes";
import { logout } from "./services/nonql";

export default function App() {
  const [listOfJobs, setListOfJobs] = useState([]);
  const [loggedIn, setloggedIn] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      let response = await GetJobs();
      setListOfJobs(response);
    })();
  }, []);

  function handleLogout() {
    logout();
    setloggedIn(false);
  }

  function handleLogin() {
    setloggedIn(true);
  }
  return (
    <div className="app">
      <Router>
        <nav>
          <NavBar loggedIn={loggedIn} handleLogout={handleLogout} />
        </nav>

        <section className="section">
          <div className="container">
            <AppRoutes listOfJobs={listOfJobs} handleLogin={handleLogin} />
          </div>
        </section>
      </Router>
    </div>
  );
}
