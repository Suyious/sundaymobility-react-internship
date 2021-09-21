import "./Hero.css"

//Wrapper Element for the user Interface
const Hero = ({children}) => {
  return(
    <div className="Hero">
      <div className="hero_left">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt="Background for pages from unsplash" />
      </div>
      <div className="hero_right">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Hero;
