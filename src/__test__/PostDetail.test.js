import React from 'react';
import { render, screen } from '@testing-library/react';
import PostDetail from '../components/PostDetail';

const mockBlog = {
  title: 'Test Blog Detail',
  creator: ['Arun'],
  pubDate: '2025-07-04T06:08:58Z',
  description: 'This is a test blog description',
  source_name: 'News Source',
  link: 'https://example.com',
  category: ['Technology'],
  image_url: '',
};

describe('PostDetail Component', () => {
  it('renders blog details correctly', () => {
    render(<PostDetail blog={mockBlog} />);
    expect(screen.getByText('Test Blog Detail')).toBeInTheDocument();
    expect(screen.getByText(/This is a test blog description/i)).toBeInTheDocument();
    expect(screen.getByText(/Arun/i)).toBeInTheDocument();
  });
});
