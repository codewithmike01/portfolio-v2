import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import BgButton from '../components/BgButton';
import { BlogContiainer } from './styles/Blog.styles';
import HelmetHead from '../components/HelmetHead';
import { scrollToTop } from '../utils/scrollToTop';

const BlogPage = () => {
  const navigate = useNavigate();

  // On render scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HelmetHead
        description="Blog Post made by Royal Coder"
        title="Posts"
        keywords="post, Posts,  blog, Blog, technology posts"
      />
      <NavBar />
      <BlogContiainer>
        <p>Blog posts in Progress, Coming Soon...</p>
        <BgButton
          text="Back to home"
          func={() => navigate('/')}
          width="10rem"
        />
      </BlogContiainer>
    </>
  );
};

export default BlogPage;
