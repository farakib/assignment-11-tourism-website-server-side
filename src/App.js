import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Services from './pages/Services/Services';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';

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
        {/* eikane akta private route korbo */}
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
