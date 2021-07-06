import { render, screen } from '@testing-library/react';
import Todos from './Todos';

const mock = [
  {
    id: '1',
    title: 'This is a title',
    desc: 'this is a desc',
    isActive: true,
  },
  {
    id: '2',
    title: 'This is a title',
    desc: 'this is a desc',
    isActive: true,
  },
  {
    id: '3',
    title: 'This is a title',
    desc: 'this is a desc',
    isActive: true,
  }
]

test('renders Head element', () => {
  render(<Todos todos={mock}/>);
  const linkElement = screen.getAllByRole('heading');
  expect(linkElement).toHaveLength(3);
});
