import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/UserDasboard/Dashboard/Dashboard';
import Book from './Components/UserDasboard/Book/Book';
import ServiceList from './Components/UserDasboard/ServiceList/ServiceList';
import Comment from './Components/UserDasboard/Comment/Comment';
import Admin from './Components/Admin/Admin/Admin';
import AddService from './Components/Admin/AddService/AddService';
import OrderList from './Components/Admin/OrderList/OrderList';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './Components/Admin/ManageService/ManageService';

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
        <Route path='/review'>
          <Comment/>
        </Route>  
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/order'>
          <OrderList></OrderList>
        </Route>
        <Route path='/addService'>
          <AddService/>
        </Route>
        <Route path='/addAdmin'>
          <MakeAdmin/>
        </Route>
        <Route path='/manageService'>
          <ManageService/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
