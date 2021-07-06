import { render, screen } from '@testing-library/react';
import Todo from './Todo';

const mock = {
  id: '1',
  title: 'This is a title',
  desc: 'this is a desc',
  isActive: true,
}


test('renders Head element', () => {
  render(<Todo todo={mock}/>);
  const linkElement = screen.getByRole('heading');
  expect(linkElement.textContent).toEqual('This is a title');
});
test('renders Button element', () => {
  render(<Todo todo={mock}/>);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});