import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import BgButton from '../components/BgButton';
import { BlogContiainer } from './styles/Blog.styles';
import HelmetHead from '../components/HelmetHead';

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HelmetHead description="Hello" title="Blogger" />
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
