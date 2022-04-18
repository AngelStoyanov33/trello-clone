import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./assets/pages/Login/loginPage.js";
import DashboardPage from "./assets/pages/Dashboard/dashboardPage.js";
import ProtectedRoute from "./assets/components/ProtectedRoute/ProtectedRoute";
import { logoutCurrentUser } from "./service/userService.js";
import BoardsPage from "./assets/pages/Boards/boardsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route
            exact
            path="/logout"
            render={() => {
              logoutCurrentUser();
              return <Redirect to="/" />;
            }}
          />
          <ProtectedRoute
            exact
            path="/dashboard/:id"
            component={DashboardPage}
          />
          <ProtectedRoute exact path="/boards" component={BoardsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
