import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'

// Pääkomponentti
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

  // Vastaa kirjautumisesta sisään
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
    // Asetetaan käyttäjäksi kirjautunut käyttäjä
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    // Ilmoittaa virheellisistä tunnuksista
    } catch (exception) {
      setStatusMessage('wrong username or password')
      setTimeout(() => {
        setStatusMessage(null)
      }, 4000)
    }
  }
  // Vastaa uloskirjautumisesta
  // Kirjaa ulos ja lähettää ilmoituksen onnistuneesta operaatiosta
  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
  // Kirjataan käyttäjä ulos asettamalla käyttäjä "tyhjäksi"
    setUser(null)
    setStatusMessage('successfully logged out')
        setTimeout(() => {
          setStatusMessage(null)}, 4000)
    
  }
  // Vastaa blogin lisäämisestä
  // Päivittää renderöitävät blogit ja lähettää ilmoituksen onnistuneesta operaatiosta
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
  // Vastaa tykkäysten lisäämisestä ja muutoksen renderöinnistä
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
  // Lähettää ilmoituksen, mikäli jostain syystä jo poistettua blogia yritetään tykätä
  // Tämän ei kuitenkaan tulisi olla mahdollista
        setStatusMessage(`Blog ${blog.title} is already removed from server!`)
        setTimeout(() => {
          setStatusMessage(null)
        }, 4000)
        setBlogs(blogs.filter(b => b.id !== id))
      })
  }
  // Vastaa blogin poistamisesta
  const removeBlog = id => {
    const blog = blogs.find(b => b.id === id);
    if (window.confirm(`Delete blog ${blog.title} by ${blog.author}?`)) {
      blogService.deleteBlog(id).then(() => {
        setBlogs(blogs.filter(b => b.id !== id));
  // Lähettää ilmoituksen onnistuneesta poisto-operaatiosta
        setStatusMessage(
          `Blog ${blog.title} by ${blog.author} was removed from bloglist`
        );
        setTimeout(() => {
          setStatusMessage(null);
        }, 4000);
      });
    }
  };

  // Ehdollinen renderöinti, jos käyttäjä on "tyhjä", renderöidään sisäänkirjautumislomake
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
  // Mikäli käyttäjä on kirjautuneena sisään, renderöidään tämä
  return (
    <div>
      <h1>BlogApp</h1>
      <Notification message={statusMessage} />
      <p>{user.name} logged in <button onClickCapture={handleLogout}>logout</button> </p>
      <Togglable buttonLabel="create new blog" ref={blogFormRef}>
        <BlogForm createBlog={addBlog}/>
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
