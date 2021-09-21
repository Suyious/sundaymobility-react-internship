import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Register from "./components/Register"
import Login from "./components/Login"
import List from "./components/List"
import {useState} from 'react';

function App() {
  
  // States for holding the current user and all users
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const [users,setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);

  // Routing using react-router-dom
  return (
    <div className="App">
      <div className="wrapper">
        <Router> 
          <Navigation user={user} setUser={setUser}/>
          <Hero>
            <Route path="/" exact>
              <Register setUsers={setUsers} setUser={setUser} user={user} users={users}/>
            </Route>
            <Route path="/login">
              <Login setUsers={setUsers} setUser={setUser} user={user} users={users}/>
            </Route>
            <Route path="/list">
              <List user={user}/>
            </Route>
          </Hero>
        </Router>
      </div>
    </div>
  );
}

export default App;
