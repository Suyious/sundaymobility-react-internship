import "./Register.css"

const Register = () => {
  return(
    <div class="Register">
      <h1>Welcome!</h1>
      <p>Please register to your account.</p>
      <form className="actionForm" action="">
        <input className="action_input" type="text" placeholder="Name"/>
        <input className="action_input" type="text" placeholder="Mobile"/>
        <input className="action_input" type="email" placeholder="Email"/>
        <input className="action_input" type="password" placeholder="Password"/>
        <input className="action_input" type="password" placeholder="Confirm Password"/>
        <div className="input_sub_box">
          <input type="checkbox" id="remember_me" name="remember_me"/>
          <label className="remember_label" for="remember_me">Remember me</label>
        </div>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register;
