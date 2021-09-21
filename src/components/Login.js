import {useState} from "react"
import {Redirect, useHistory} from "react-router-dom";

const Login = ({user, users,setUser}) => {

  const [errors, setErrors] = useState({})
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // function to validate user input for the form
  const validateInput = (email,password) => {
    const error = {};
    if(!email.match(/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/)) error.email = "email must be valid!"
    if(password.length === 0) error.password = "password must not be empty!"
    return error;
  }

  const handleLogin = e => {
    e.preventDefault()
    const errorObj = validateInput(email,password);
    setErrors(errorObj);
    const userObj = users.find(user=>user.email===email)
    if(userObj && userObj.password===password){
      setUser(userObj)
      localStorage.setItem("user", JSON.stringify(userObj))
      history.push("/list")
    } else if(Object.keys(errorObj).length===0) {
      setErrors({...errorObj, general: "Wrong email or password"})  
    }
  }

  //Redircting to list page if already logged in  
  if(Object.keys(user).length !== 0) return <Redirect to="/list"/>

  return(
    <div className="Login">
      <h1>Welcome back!</h1>
      <p>Please login to your account.</p>
      <form className="actionForm" action="">
        <input className="action_input" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
        {errors.email && <p className="action_error">{errors.email}</p>}
        <input className="action_input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
        {errors.password && <p className="action_error">{errors.password}</p>}
        <div className="input_sub_box">
          <input type="checkbox" id="remember_me" name="remember_me"/>
          <label className="remember_label" htmlFor="remember_me">Remember me</label>
          <a className="input_forgot" href=".">Forgot Password</a>
        </div>
        {errors.general && <p className="action_error">{errors.general}</p>}
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login
