import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./assets/pages/Login/loginPage.js";
import DashboardPage from "./assets/pages/Dashboard/dashboardPage.js";
import ProtectedRoute from "./assets/components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <ProtectedRoute exact path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
