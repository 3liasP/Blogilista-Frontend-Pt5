import PropTypes from 'prop-types'

const Blog = ({blog, user, addLike, removeBlog}) => {

  Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeBlog: PropTypes.func
  }

  const showDeleteButton = {
    display: user.username === blog.user.username ? "" : "none"
  };

  return (
    <li className='blog'>
    <div><i>{blog.title}</i></div>
    <div>by: <i>{blog.author}</i></div>
    <div>likes: {blog.likes}<button onClick={addLike}>like</button></div>
    <div>added by: {blog.user.username}</div>
    <button style={showDeleteButton} onClick={removeBlog}>remove</button><br/>
    <br/>
    </li>
  )

}
 

export default Blog