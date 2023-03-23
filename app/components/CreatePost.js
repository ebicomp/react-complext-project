import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Page from "./Page"
import Axios from "axios"
import DispachContext from "../DispachContext"

const CreatePost = props => {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const navigate = useNavigate()
  const appDispatch = useContext(DispachContext)
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await Axios.post("/create-post", { title, body, token: localStorage.getItem("complexAppToken") })
      console.log(response.data)
      appDispatch({ type: "flashMessage", value: "Congrates, you created a post" })
      navigate(`/post/${response.data}`)
    } catch (e) {
      console.log(error, e.response.data)
    }
  }

  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            autoFocus
            name="title"
            value={title}
            onChange={e => {
              setTitle(e.target.value)
            }}
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autocomplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea name="body" id="post-body" onChange={e => setBody(e.target.value)} value={body} className="body-content tall-textarea form-control" type="text"></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Page>
  )
}

export default CreatePost
