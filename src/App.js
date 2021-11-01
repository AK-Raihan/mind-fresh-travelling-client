import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import MyOrder from './components/MyOrder/MyOrder';
import Booking from './components/Booking/Booking';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageOrder from './components/ManageOrder/ManageOrder';
import AddTour from './components/AddTour/AddTour';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/services">
        <Services></Services>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/myOrder">
          <MyOrder></MyOrder>
        </Route>
        <Route path="/addTour">
          <AddTour></AddTour>
        </Route>
        <Route path="/manageOrder">
          <ManageOrder></ManageOrder>
        </Route>
        <PrivateRoute path="/booking/:serviceId">
          <Booking></Booking>
        </PrivateRoute>
        <Route path="/placeOrder">
          <PlaceOrder></PlaceOrder>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>


      </AuthProvider>
    </div>
  );
}

export default App;
