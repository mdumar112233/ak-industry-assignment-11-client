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
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <PrivateRoute path='/dashboard'>
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path='/book/:id'>
          <Book/>
        </PrivateRoute>
        <Route path='/bookList'>
          <ServiceList/>
        </Route>
        <Route path='/review'>
          <Comment/>
        </Route>  
        <PrivateRoute path='/admin'>
          <Admin/>
        </PrivateRoute>
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
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
