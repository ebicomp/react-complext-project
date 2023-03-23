import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import StateContext from "../StateContext"
import HeaderLogedIn from "./HeaderLogedIn"
import HeaderLogedOut from "./HeaderLogedOut"

function Header(props) {
  const appState = useContext(StateContext)
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            ComplexApp
          </Link>
        </h4>
        {appState.logedIn ? <HeaderLogedIn /> : <HeaderLogedOut />}
      </div>
    </header>
  )
}

export default Header
