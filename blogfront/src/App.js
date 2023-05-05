import { useState, useEffect } from 'react';
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import './App.css';
import { Route, Routes } from 'react-router-dom'

const apiURL ="https://blog-0.herokuapp.com"

function App() {
  const [posts, setPosts] = useState([])

  const getBlog = async () => {
    const response = await fetch(apiURL + '/blog/')
    const data = await response.json()
    setPosts(data)
  }

  useEffect(() => {
    getBlog()
  }, [])

  const handleFormSubmission = async (data, type) => {
    if(type === 'new'){
      const response = await fetch(`${apiURL}/blog/`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getBlog()
    } else {
      const response = await fetch(`${apiURL}/blog/${data.id}/`, {
        method: 'put',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getBlog()
    }
  }
  
  const deleteBlog = async (id) => {
    const response = await fetch(`${apiURL}/blog/${id}/`,
    {
      method: 'delete'
    })
    getBlog()
  }

  return (
    <div className="App">
      <h1>My Blog</h1>
      <Routes>
        <Route
          exact
          path='/'
          element={<AllPosts posts={posts} deleteBlog={deleteBlog} />}
        />
        <Route
          path='/post/:id'
          element={<SinglePost posts={posts} />}
        />
        <Route
          path='/new'
          element={<Form handleSubmit={handleFormSubmission} buttonLabel='Add Post' formType='new'/>}
        />
        <Route
          path='/edit/:id'
          element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Edit Post' formType='edit'/>}
        />
      </Routes>
    </div>
  );
}

export default App;