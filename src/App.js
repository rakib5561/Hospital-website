import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Doctors from './components/Doctors/Doctors';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import NotFound from './components/NotFound/NotFound';


function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>

        <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>
               <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                 <About></About>
              </Route>
              <Route path="/services">
                 <Services></Services>
              </Route>
              <Route path="/doctors">
                <Doctors></Doctors>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/login">
                 <Login></Login>
              </Route>
              <Route path="/registration">
               <Registration></Registration>
              </Route>
              <Route path="*">
                  <NotFound></NotFound>
              </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
