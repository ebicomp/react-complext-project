import React, { useContext } from "react"
import { Link } from "react-router-dom"
import DispachContext from "../DispachContext"

const HeaderLogedIn = props => {
  const appDispatch = useContext(DispachContext)
  const handleLogout = params => {
    appDispatch({ type: "logout" })
    localStorage.removeItem("complexAppToken")
    localStorage.removeItem("complexAppUsername")
    localStorage.removeItem("complexAppAvatar")
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="#" className="mr-2">
        <img className="small-header-avatar" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" />
      </a>
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLogedIn
