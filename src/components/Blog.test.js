import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('renders title and author', () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Tester',
        url: 'example.com',
        likes: 22,
        user: {
            username: "testy"
        }
    }
    const user = {
        username: "testy"
    }
  
    render(<Blog blog={blog} user={user}/>)
  
    const title = screen.getByText('Component testing is done with react-testing-library')
    const author = screen.getByText('Tester')
    expect(title).toBeDefined()
    expect(author).toBeDefined()
})

test("clicking the like button twice, calls event handler function twice", async () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Tester',
        url: 'example.com',
        likes: 22,
        user: {
            username: "testy"
        }
    }
    const user = {
        username: "testy"
    }
  
    const mockHandler = jest.fn();
  
    const { getByText } = render(
      <Blog blog={blog} user={user} addLike={mockHandler} />
    );
  
    const button = getByText("like");
    fireEvent.click(button);
    fireEvent.click(button);
  
    expect(mockHandler.mock.calls.length).toBe(2);
  });