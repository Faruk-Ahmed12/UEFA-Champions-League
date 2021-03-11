import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import TeamDetail from './components/TeamDetail/TeamDetail';
import NoMatch from './components/NoMatch/NoMatch';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = "UEFA Champions League";
  }, []);
  return (
    <div className="Appa">
         <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/team/:idTeam">
            <TeamDetail />
        </Route>
        <Route exact path="/">
          <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
