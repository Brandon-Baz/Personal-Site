import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { BlogArticle } from '../../types/data';
import fetchMediumPosts from '../../services/MediumBlog';
import fetchDevToPosts from '../../services/DevToBlog';
import {
    BlogContainer,
    BlogPost,
    BlogTitle,
    BlogExcerpt,
    BlogDate,
    ReadMoreLink,
    BlogSource
} from '../../styles/BlogPreviewStyles';
import {BlogPostReadTime} from "../../styles/BlogStyle";

const BlogPreview = () => {
    const [posts, setPosts] = useState<BlogArticle[]>([]);
    const { isProfessionalMode } = useTheme();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const mediumPosts = await fetchMediumPosts();
                const devToPosts = await fetchDevToPosts();

                const allPosts = [...mediumPosts, ...devToPosts]
                    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
                    .slice(0, 3); // Get only the 3 most recent posts

                setPosts(allPosts);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <BlogContainer>
            {posts.map((post, index) => (
                <BlogPost
                    key={post.id}
                    as={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <BlogTitle>{post.title}</BlogTitle>
                    <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                    <BlogDate>{post.publishDate}</BlogDate>
                    <BlogSource>Source: {post.source}</BlogSource>
                    <BlogPostReadTime>Time to Read: {post.timeToRead}</BlogPostReadTime>
                    <ReadMoreLink href={post.link} target="_blank" rel="noopener noreferrer">
                        {isProfessionalMode ? 'Read More' : 'Uncover the Secret'}
                    </ReadMoreLink>
                </BlogPost>
            ))}
        </BlogContainer>
    );
};

export default BlogPreview;