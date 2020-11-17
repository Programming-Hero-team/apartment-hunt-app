
import './App.css';
import NavBar from './components/Share/NavBar/NavBar';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddRentHouse from './components/Dashboard/AddRentHouse/AddRentHouse';
import Welcome from './components/Dashboard/Welcome/Welcome';
import MyRent from './components/Dashboard/MyRent/MyRent';
import AllBookingList from './components/Dashboard/AllBookingList/AllBookingList';
import RentHouse from './components/Home/RentHouse/RentHouse';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import NotFound from './components/Home/NotFound/NotFound';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';




export const UserContext = createContext();
function App() {
  const[loggedInUser,setLoggedInUser] = useState({});
  return (
    <div>
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <NavBar></NavBar>
      <Switch>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          
          <Route exact path="/details/:houseKey">
            <RentHouse></RentHouse>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Welcome></Welcome>
          </PrivateRoute>
          <Route exact path="/details/dashboard">
            <Welcome></Welcome>
          </Route>
          <Route exact path="/myrent">
            <MyRent></MyRent>
          </Route>
          <Route exact path="/addrenthouse">
            <AddRentHouse></AddRentHouse>
          </Route>
          <Route exact path="/renthouselist">
            <AllBookingList></AllBookingList>
          </Route>
          <Route exact path="/addadmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
