import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'

const App = () => {
  const [blogs, setBlogs] = useState([])
	const [statusMessage, setStatusMessage] = useState(null)
  
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs => 
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const blogFormRef = useRef()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      
    } catch (exception) {
      setStatusMessage('wrong username or password')
      setTimeout(() => {
        setStatusMessage(null)
      }, 4000)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
    setStatusMessage('successfully logged out')
        setTimeout(() => {
          setStatusMessage(null)}, 4000)
    
  }

  const addBlog = (blogObject) => {
    blogService
      .create(blogObject)
      .then(returnedBlog => {
          setBlogs(blogs.concat(returnedBlog))
          blogFormRef.current.toggleVisibility()
          setStatusMessage(`a new blog "${returnedBlog.title}" by "${returnedBlog.author}" added`)
          setTimeout(() => {
            setStatusMessage(null)}, 4000)
      })
  }

  const addLike = id => {
    const blog = blogs.find(b => b.id === id)
    const newLikes = blog.likes + 1
    const changedBlog = { ...blog, likes: newLikes }

    blogService
      .update(id, changedBlog)
      .then(returnedBlog => {
        setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog))
      })
      .catch(() => {
        setStatusMessage(`Blog ${blog.title} is already removed from server!`)
        setTimeout(() => {
          setStatusMessage(null)
        }, 4000)
        setBlogs(blogs.filter(b => b.id !== id))
      })
  }

  const removeBlog = id => {
    const blog = blogs.find(b => b.id === id);
    if (window.confirm(`Delete blog ${blog.title} by ${blog.author}`)) {
      blogService.deleteBlog(id).then(() => {
        setBlogs(blogs.filter(b => b.id !== id));
        setStatusMessage(
          `Blog ${blog.title} by ${blog.author} was removed from bloglist`
        );
        setTimeout(() => {
          setStatusMessage(null);
        }, 4000);
      });
    }
  };

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={statusMessage} />
        <form onSubmit={handleLogin}>
          <div>
            username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
            />
            </div>
            <button type="submit">login</button>
          </form>
      </div>
    )
  }

  return (
    <div>
      <h1>BlogApp</h1>
      <Notification message={statusMessage} />
      <p>{user.name} logged in <button onClickCapture={handleLogout}>logout</button> </p>
      <Togglable buttonLabel="create new blog" ref={blogFormRef}>
        <BlogForm createBlog={addBlog} userid={user._id} />
      </Togglable>
      <br/>
      <h3>All Blogs:</h3>
      {blogs.sort((a, b) => b.likes - a.likes).map((blog) => (
        <Blog key={blog.id}
        blog={blog}
        addLike={() => addLike(blog.id)}
        removeBlog={() => removeBlog(blog.id)}
        user = {user}
        />
      ))}
    </div>
  )
}

export default App