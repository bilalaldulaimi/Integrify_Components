import Cards from "./components/cards";
import "./styles.css";
import User from "./components/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Cards />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
