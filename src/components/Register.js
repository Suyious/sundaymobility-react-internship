import {useState} from "react";
import {Redirect, useHistory} from "react-router-dom";
import "./Register.css"

const Register = ({user, users, setUsers, setUser}) => {

  const [errors, setErrors] = useState({})
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const validateInput = (name,mobile,email,password,confirmPassword) => {
    const error = {};
    if(name.length === 0) error.name = "name must not be empty!"
    if(!name.match(/^[a-zA-Z\s]*$/)) error.name = "name must have only letters and spaces!"
    if(!mobile.match(/^[\d]{10}/)) error.mobile = "mobile must be 10 digit number!"
    if(!email.match(/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/)) error.email = "email must be valid!"
    if(!error.email && users.find(user=>user.email===email)) error.email = "email is taken!"
    if(password.length<8) error.password = "password must be at least 8 characters long!"
    if(confirmPassword.length<8) error.confirmPassword = "password must be at least 8 characters long!"
    if(password !== confirmPassword) error.confirmPassword = "Passwords must match!"
    return error;
  }

  const handleRegisterButton = (e) => {
    e.preventDefault()
    const errorsObj = validateInput(name,mobile,email,password,confirmPassword)
    //console.log(errorsObj)
    setErrors(errorsObj)
    if(Object.keys(errorsObj).length === 0){
      const userObj = {name, mobile, email, password}
      setUser(userObj);
      localStorage.setItem("user", JSON.stringify(userObj))
      setUsers([ ...users,userObj ])
      localStorage.setItem("users", JSON.stringify([...users,userObj]))
      history.push("/list")
    }
  }
  
  
  if(Object.keys(user).length !== 0) return <Redirect to="/list"/>

  return(
    <div className="Register">
      <h1>Welcome!</h1>
      <p>Please register to your account.</p>
      <form className="actionForm" action="">
        <input className="action_input" type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value.trim())}/>
        {errors.name && <p className="action_error">{errors.name}</p>}
        <input className="action_input" type="text" placeholder="Mobile" value={mobile} onChange={e=>setMobile(e.target.value.trim())}/>
        {errors.mobile && <p className="action_error">{errors.mobile}</p>}
        <input className="action_input" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value.trim())}/>
        {errors.email && <p className="action_error">{errors.email}</p>}
        <input className="action_input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value.trim())}/>
        {errors.password && <p className="action_error">{errors.password}</p>}
        <input className="action_input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value.trim())}/>
        {errors.confirmPassword && <p className="action_error">{errors.confirmPassword}</p>}
        <div className="input_sub_box">
          <input type="checkbox" id="remember_me" name="remember_me"/>
          <label className="remember_label" htmlFor="remember_me">Remember me</label>
        </div>
        <button onClick={handleRegisterButton} type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;
