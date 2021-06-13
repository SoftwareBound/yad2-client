import "./App.css";
import { LoginMain } from "./Login/";
import { RegisterMain } from "./Register";
import "tachyons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavbarMain } from "./Navbar";
import { HomePage } from "./Home/";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMain />
        <Switch>
          <Route path="/register">
            <RegisterMain />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/">
            <LoginMain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
