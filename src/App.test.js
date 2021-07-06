import { render, screen, fireEvent, configure } from '@testing-library/react';
import App from './App';

describe(`Application's logic testing`, () => {
  test('add to the list', () => {
    render(<App />)

    const button = screen.getByText(/add/i);
    const title = screen.getByPlaceholderText(/15 char/i);
    const desc = screen.getByPlaceholderText(/45 char/i);
    // Check if the add button is on the HTML
    expect(button).toBeInTheDocument();
    // Fill up the input fields
    fireEvent.change(title, {target: {value: 'Todo'}});
    fireEvent.change(desc, {target: {value: 'desc'}});
    expect(title.value).toBe('Todo');
    // Add to the list
    fireEvent.click(button);
    // Check if the tile with a header is added
    const headerTitle = screen.getByRole('heading');
    expect(headerTitle.textContent).toEqual('Todo');
  })

  test('add to the list with missing data', () => {
    render(<App />)

    const button = screen.getByText(/add/i);
    const title = screen.getByPlaceholderText(/15 char/i);
    // Check if the add button is on the HTML
    expect(button).toBeInTheDocument();
    // Fill up one input field
    fireEvent.change(title, {target: {value: 'Todo'}});
    expect(title.value).toBe('Todo');
    // Try to add to the list
    fireEvent.click(button);
    // Just the basic header should be in the list
    const headerTitle = screen.getByRole('heading');
    expect(headerTitle.textContent).toEqual('There is no ToDo for today');
  })

  test('try to delete element with remove button before it appears', () => {
    render(<App />)

    configure({testIdAttribute: 'class'})
    const button = screen.getByTestId('form_add__btn');
    const title = screen.getByPlaceholderText(/15 char/i);
    const desc = screen.getByPlaceholderText(/45 char/i);
    // Check if the add button is on the HTML
    expect(button).toBeInTheDocument();
    // Fill up the input fields
    fireEvent.change(title, {target: {value: 'Todo'}});
    fireEvent.change(desc, {target: {value: 'desc'}});
    expect(title.value).toBe('Todo');
    // Add to the list
    fireEvent.click(button);
    // Select the added tile
    const todo = screen.getByTestId('todo__article');
    // Select the button element and fire the delete request
    const removeBtn = screen.getByTestId(/\btodo__btn\b/i);
    fireEvent.click(removeBtn);
    // The todo should be still in the list
    expect(todo).toBeInTheDocument();
  })

  test('delete element with remove button after it appeared', () => {
    render(<App />)

    configure({testIdAttribute: 'class'})
    const button = screen.getByTestId('form_add__btn');
    const title = screen.getByPlaceholderText(/15 char/i);
    const desc = screen.getByPlaceholderText(/45 char/i);
    // Check if the add button is on the HTML
    expect(button).toBeInTheDocument();
    // Fill up the input fields
    fireEvent.change(title, {target: {value: 'Todo'}});
    fireEvent.change(desc, {target: {value: 'desc'}});
    expect(title.value).toBe('Todo');
    // Add to the list
    fireEvent.click(button);
    // Select the added tile
    const todo = screen.getByTestId('todo__article');
    // Click on the tile to show the remove button
    fireEvent.click(todo);
    // Select the button element and fire the delete request
    const removeBtn = screen.getByTestId(/\btodo__btn\b/i);
    fireEvent.click(removeBtn);
    // The todo should disappear
    expect(todo).not.toBeInTheDocument();
  })
})
