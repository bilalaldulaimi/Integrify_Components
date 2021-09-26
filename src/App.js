import Cards from "./components/cards";
import "./styles.css";
import User from "./components/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Cards />
          </Route>
          <Route exact path="/users/:id">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}
