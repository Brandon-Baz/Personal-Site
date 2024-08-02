import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import '../../styles/Blog.css';

// Define a TypeScript interface for your post objects
interface BlogPost {
    title: string;
    link: string;
    pubDate: number; // Using timestamp for sorting
    source: string;
}

const BlogFeed: React.FC = () => {
    // Use the BlogPost interface to type your state
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const { theme } = useTheme();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch Medium posts
                const mediumResponse = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oAnubis');
                const mediumPosts: BlogPost[] = mediumResponse.data.items.map((item: any) => ({
                    title: item.title,
                    link: item.link,
                    pubDate: new Date(item.pubDate).getTime(),
                    source: 'Medium'
                }));

                // Fetch Dev.to posts
                const devToResponse = await axios.get('https://dev.to/api/articles?username=brandonbaz');
                const devToPosts: BlogPost[] = devToResponse.data.map((item: BlogPost) => ({
                    title: item.title,
                    link: item.link,
                    pubDate: new Date(item.pubDate).getTime(),
                    source: 'Dev.to'
                }));

                // Combine and sort posts
                const allPosts = [...mediumPosts, ...devToPosts].sort((a, b) => b.pubDate - a.pubDate);
                setPosts(allPosts.slice(0, 10));
            } catch (error) {
                
            }
        };

        fetchPosts().then(r => r);
    }, []);

    return (
        <div className={`blog-feed ${theme}`}>
            <h2>Recent Blog Posts</h2>
            {posts.map((post, index) => (
                <motion.div
                    key={post.link}
                    className="blog-post"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <h3>{post.title}</h3>
                    <p>{new Date(post.pubDate).toLocaleDateString()}</p>
                    <p>Source: {post.source}</p>
                    <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
                </motion.div>
            ))}
        </div>
    );
};

export default BlogFeed;
