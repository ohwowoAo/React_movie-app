import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Deteil from "./routes/Deteil";
import Home from "./routes/Home";

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id" >
          <Deteil />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
        
    </Router>
  )
};

export default App;