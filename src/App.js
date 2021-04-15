import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/UserDasboard/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
