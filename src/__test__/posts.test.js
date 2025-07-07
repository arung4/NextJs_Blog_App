import { getStaticProps } from '../pages/posts';
import FetchBlogs from '../lib/FetchBlogs'

jest.mock('../lib/FetchBlogs');

describe('Data Fetching: getStaticProps', () => {
  it('should return blogs as props', async () => {
    const mockData = [
      { article_id: '1', title: 'Mock Blog', creator: ['Test'] },
    ];

    FetchBlogs.mockResolvedValueOnce(mockData);

    const response = await getStaticProps();
    expect(response).toEqual({
      props: {
        blogs: mockData,
      },
      revalidate : 60,
    });
  });
});
