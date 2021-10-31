import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Services from './pages/Services/Services';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import Booking from './pages/Booking/Booking/Booking';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Blogs from './pages/Blogs/Blogs';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';



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
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/blogs'>
          <Blogs></Blogs>
        </Route>
        <Route path='/manageOrders'>
          <ManageOrders></ManageOrders>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        
        <PrivateRoute path='/booking/:serviceId'>
          <Booking></Booking>
        </PrivateRoute>
        <Route path='*'>
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
