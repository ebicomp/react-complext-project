import React, { useState, useReducer } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, UNSAFE_DataRouterStateContext } from "react-router-dom"
import Axios from "axios"
Axios.defaults.baseURL = "http://localhost:8080"

// My Components
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import Home from "./components/Home"
import CreatePost from "./components/CreatePost"
import ViewSinglePost from "./components/ViewSinglePost"
import FlashMessages from "./components/FlashMessages"
import DispachContext from "./DispachContext"
import StateContext from "./StateContext"

function Main() {
  const initialState = {
    logedIn: Boolean(localStorage.getItem("complexAppToken")),
    flashMessages: []
  }
  function ourReducer(state, action) {
    switch (action.type) {
      case "login":
        return { logedIn: true, flashMessages: state.flashMessages }
      case "logout":
        return { logedIn: false, flashMessages: state.flashMessages }
      case "flashMessage":
        return { logedIn: state.logedIn, flashMessages: state.flashMessages.concat(action.value) }
    }
  }

  const [state, dispatch] = useReducer(ourReducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispachContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />
          <Routes>
            <Route path="/" element={state.logedIn ? <Home /> : <HomeGuest />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/post/:id" element={<ViewSinglePost />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispachContext.Provider>
    </StateContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
