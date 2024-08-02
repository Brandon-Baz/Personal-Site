import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BlogArticle } from "../types/data";
import fetchMediumPosts from '../services/MediumBlog';
import fetchDevToPosts from '../services/DevToBlog';
import {
    BlogContainer,
    BlogGrid,
    BlogPostSection,
    BlogPostContent,
    BlogPostExcerpt,
    BlogPostImage,
    BlogPostTitle,
    BlogTitle,
    BlogPostAuthor,
    BlogPostPostedDate,
    BlogPostReadTime,
    ReadMoreLink,
    BlogPostMeta,
    BlogPostFooter,
    BlogPostSource,
    BlogSectionHeader,
    PageFooter,
    ContentWrapper,
    FooterContent
} from "../styles/BlogStyle";
import {heroTheme} from "../styles/themes/heroTheme";

const Blog: React.FC = () => {
    const { theme, isProfessionalMode } = useTheme();
    const [posts, setPosts] = useState<BlogArticle[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const mediumParsedPosts = await fetchMediumPosts();
            const devToParsedPosts = await fetchDevToPosts();
            setPosts([...mediumParsedPosts, ...devToParsedPosts]);
        }
        fetchPosts();
    }, []);

    return (
        <BlogContainer>
            <ContentWrapper>
                <BlogTitle>
                    {isProfessionalMode
                        ? "Brandon's Tech Insights"
                        : theme === heroTheme
                            ? "Chronicles of Code"
                            : "Villainous Verses"}
                </BlogTitle>
                <BlogGrid>
                    {posts.map((post, index) => (
                        <BlogPostSection
                            key={post.id || index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <BlogPostImage src={post.coverImage} alt={post.title} />
                            <BlogPostContent>
                                <BlogPostTitle>{post.title}</BlogPostTitle>
                                <BlogPostExcerpt>
                                    <BlogSectionHeader>Excerpt:</BlogSectionHeader> {post.excerpt}
                                </BlogPostExcerpt>
                                <BlogPostFooter>
                                    <FooterContent>
                                        <BlogPostAuthor>
                                            <BlogSectionHeader>Author:</BlogSectionHeader> {post.author}
                                        </BlogPostAuthor>
                                        <ReadMoreLink to={`/blog/${post.id}`}>
                                            {isProfessionalMode ? "Read More" : theme === heroTheme ? "Uncover the Truth" : "Delve into Darkness"}
                                        </ReadMoreLink>
                                    </FooterContent>
                                    <BlogPostSource>
                                        <BlogSectionHeader>Source:</BlogSectionHeader> {post.source}
                                    </BlogPostSource>
                                </BlogPostFooter>
                                <BlogPostMeta>
                                    <BlogPostPostedDate>Posted: {post.publishDate}</BlogPostPostedDate>
                                    <BlogPostReadTime>Read Time: {post.timeToRead}</BlogPostReadTime>
                                </BlogPostMeta>
                            </BlogPostContent>
                        </BlogPostSection>
                    ))}
                </BlogGrid>
            </ContentWrapper>
            <PageFooter>
                © {new Date().getFullYear()} Brandon Coburns Blog. All rights reserved.
            </PageFooter>
        </BlogContainer>
    );
};

export default Blog;