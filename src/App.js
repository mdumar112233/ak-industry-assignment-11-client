import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/UserDasboard/Dashboard/Dashboard';
import Book from './Components/UserDasboard/Book/Book';
import ServiceList from './Components/UserDasboard/ServiceList/ServiceList';
import Comment from './Components/UserDasboard/Comment/Comment';

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
        <Route path='/book'>
          <Book/>
        </Route>
        <Route path='/bookList'>
          <ServiceList/>
        </Route>
        <Route path='/comment'>
          <Comment/>
        </Route>  
      </Switch>
    </Router>
  );
}

export default App;
