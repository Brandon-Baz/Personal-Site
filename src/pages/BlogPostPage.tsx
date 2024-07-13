import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost, { BlogPostProps } from '../ui/BlogPost';

const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostProps | null>(null);

  useEffect(() => {
    // Fetch the blog post data based on the id
    // This is a placeholder. Considering adding the ability to pull from other blog sites (Medium, Dev.to, etc)
    const fetchPost = async () => {
      const response = await fetch(`/api/blog/${id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return <BlogPost {...post} />;
};

export default BlogPostPage;
