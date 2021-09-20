import "./Hero.css"

const Hero = ({children}) => {
  return(
    <div class="Hero">
      <div class="hero_left">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt="Background for pages from unsplash" />
      </div>
      <div class="hero_right">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Hero;
