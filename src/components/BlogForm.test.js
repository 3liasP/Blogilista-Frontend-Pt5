import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event";
import { render, screen } from '@testing-library/react'
import BlogForm from './BlogForm'


test("should submit correct form data", async () => {
    const user = userEvent.setup()
    const createBlog = jest.fn();

    render(<BlogForm createBlog={createBlog} />)

    const inputTitle = screen.getByPlaceholderText('title')
    const inputAuthor = screen.getByPlaceholderText('author')
    const inputUrl = screen.getByPlaceholderText('url')

    const sendButton = screen.getByText('create')

    userEvent.type(inputTitle, 'Component testing is done with react-testing-library' )
    userEvent.type(inputAuthor, 'Tester' )
    userEvent.type(inputUrl, 'example.com' )
    userEvent.click(sendButton)

    expect(createBlog.mock.calls).toHaveLength(1)
    expect(createBlog.mock.calls[0][0].content).toBe('Component testing is done with react-testing-library')
});