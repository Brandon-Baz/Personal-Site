import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost, { BlogPostProps } from '../ui/BlogPost';

const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostProps | null>(null);

  useEffect(() => {
    // Fetch the blog post data based on the id
    // This is a placeholder for your actual data fetching logic
    const fetchPost = async () => {
      // Replace this with your actual API call
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