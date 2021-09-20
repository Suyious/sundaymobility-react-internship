const Login = () => {
  return(
    <div class="Login">
      <h1>Welcome back!</h1>
      <p>Please login to your account.</p>
      <form className="actionForm" action="">
        <input className="action_input" type="email" placeholder="Email"/>
        <input className="action_input" type="password" placeholder="Password"/>
        <div className="input_sub_box">
          <input type="checkbox" id="remember_me" name="remember_me"/>
          <label className="remember_label" for="remember_me">Remember me</label>
          <a className="input_forgot" href=".">Forgot Password</a>
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
