const Blog = ({blog, addLike}) => (
  <li className='note'>
  {blog.title}<br/>
  by: {blog.author}<br/>
  likes: {blog.likes}
  <button onClick={addLike}>like</button><br/>
  <br/>
  </li>  
)

export default Blog