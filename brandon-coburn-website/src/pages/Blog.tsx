import React from 'react';
import Section from '../ui/Section';
import BlogPost from '../ui/BlogPost';

const Blog: React.FC = () => {
  const blogPosts = [
    {
        id: '1',
        title: 'Clean Architecture in React Applications',
        excerpt: 'Exploring how to implement clean architecture principles in modern React applications for better maintainability and scalability.',
        date: '2024-06-15',
        tags: ['React', 'Architecture', 'Best Practices'],
        readTime: 5
      },
      {
        id: '2',
        title: 'Optimizing Performance in Large-Scale Web Applications',
        excerpt: 'Techniques and strategies for improving the performance of complex web applications, focusing on React and Node.js.',
        date: '2024-05-22',
        tags: ['Performance', 'React', 'Node.js'],
        readTime: 7
      },
  ];

  return (
    <div className="game-page">
      <Section title="Technical Blog">
        {blogPosts.map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </Section>
    </div>
  );
};

export default Blog;