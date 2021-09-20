import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Register from "./components/Register"
import Login from "./components/Login"
import List from "./components/List"

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Navigation/>
          <Hero>
            <Route path="/" exact component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/list" component={List}/>
          </Hero>
        </Router>
      </div>
    </div>
  );
}

export default App;
