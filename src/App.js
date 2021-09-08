import "./App.css";
import Assignment1 from "./Assignment1/Assignment1";
import Assignment2 from "./Assignment2/Assignment2";
import Assignment4 from "./Assignment4/Assignment4";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/Assignment1" component={Assignment1} />
          <Route path="/Assignment2" component={Assignment2} />
          <Route path="/Assignment4" component={Assignment4} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
