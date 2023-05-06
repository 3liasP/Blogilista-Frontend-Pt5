const Blog = ({blog, user, addLike, removeBlog}) => {

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