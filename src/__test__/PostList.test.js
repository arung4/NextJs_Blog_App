import React from 'react'; 
import {render, screen} from '@testing-library/react'; 
import PostList from '@/components/PostList';

const mockBlogs = [
    {
        article_id: '1',
        title: 'Test Blog Post', 
        creator: ['Admin'], 
        pubDate: '2025-07-04T06:08:58Z',
        source_name: 'Test Source',
    }
]

describe('PostList Component', ()=>{
     // to check PostList 
     it('renders blog titles correctly', ()=>{
        render(<PostList blogs={mockBlogs} />);
        expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
     })
     // 
     it('shows message when no blogs are passed', () => {
    render(<PostList blogs={[]} />);
    expect(screen.getByText(/no blogs to display/i)).toBeInTheDocument();
  });
})