import PropTypes from 'prop-types'

const Blog = ({blog, user, addLike, removeBlog}) => {

  Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeBlog: PropTypes.func.isRequired
  }

  const showDeleteButton = {
    display: user.username === blog.user.username ? "" : "none"
  };

  return (
    <li className='blog'>
    {blog.title}<br/>
    by: {blog.author}<br/>
    likes: {blog.likes}
    <button onClick={addLike}>like</button><br/>
    <button style={showDeleteButton} onClick={removeBlog}>remove</button><br/>
    <br/>
    </li> 
  )

}
 

export default Blog