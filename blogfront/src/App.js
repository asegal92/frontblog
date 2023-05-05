import { useState, useEffect } from 'react';
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import './App.css';
import { Route, Routes } from 'react-router-dom'

const apiURL ="https://blog-0.herokuapp.com"

function App(props) {
 const [posts, setPosts] = useState([])

 const getBlog = async () => {
  const response = await fetch(apiURL + '/blog/');
  const data = await response.json();
  setPosts(data);
 }

 useEffect (() => {
  getBlog()
 }, [])

  return (
    <div className="App">
      <h1>Blog</h1>
      <Routes>
      <Route
          exact
          path="/"
          element={<AllPosts posts={posts} />}
        />
        <Route
          path="/post/:id"
          element={<SinglePost posts={posts} />}
        />
        <Route
          path="/new"
          element={<Form />}
        />
        <Route
          path="/edit/:id"
          element={<Form />}
        />
      </Routes>
    </div>
  );
}

export default App;
