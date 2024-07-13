import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: number;
}

const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  excerpt,
  date,
  tags,
  readTime
}) => {
  return (
    <motion.article 
      className="blog-post game-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="blog-post-title">
        <Link to={`/blog/${id}`} className="game-link">
          {title}
        </Link>
      </h2>
      <div className="blog-post-meta">
        <span className="blog-post-date">{new Date(date).toLocaleDateString()}</span>
        <span className="blog-post-read-time">{readTime} min read</span>
      </div>
      <p className="blog-post-excerpt">{excerpt}</p>
      <div className="blog-post-tags">
        {tags.map((tag, index) => (
          <span key={index} className="blog-post-tag game-badge">
            {tag}
          </span>
        ))}
      </div>
      <Link to={`/blog/${id}`} className="blog-post-read-more game-button">
        Read More
      </Link>
    </motion.article>
  );
};

export default BlogPost;
