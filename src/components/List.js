import {Redirect} from "react-router-dom"
import "./List.css"

const List = ({user}) => {

  const list = JSON.parse(localStorage.getItem("users"))
  
  if(Object.keys(user).length === 0) return <Redirect to="/"/>

  return(
    <div className="List">
      <h1>We have the following users</h1>
      <ul className="list_users">
        {list && list.map(user=>(
          <li key={user.email} className="list_user">
            <h2>{user.name}</h2>
            <p>{user.email}</p>            
          </li>
        ))}
      </ul>
      <p>More will appear as they login</p>
    </div>
  )
}

export default List;
