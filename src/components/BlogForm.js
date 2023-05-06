import { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newUrl, setNewUrl] = useState('')

    BlogForm.propTypes = {
        createBlog: PropTypes.func.isRequired,
      }

    const addBlog = (event) => {
        event.preventDefault()
        createBlog({
          title: newTitle,
          author: newAuthor,
          url: newUrl
        })
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addBlog}>
                <div>
                title:
                <input
                    type="text"
                    value={newTitle}
                    name="Title"
                    onChange={event => setNewTitle(event.target.value)}
                    placeholder='title'
                />
                </div>
                <div>
                author:
                <input
                    type="text"
                    value={newAuthor}
                    name="Author"
                    onChange={event => setNewAuthor(event.target.value)}
                    placeholder='author'
                />
                </div>
                <div>
                url:
                <input
                    type="text"
                    value={newUrl}
                    name="Url"
                    onChange={event => setNewUrl(event.target.value)}
                    placeholder='url'
                />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
        )
}

export default BlogForm