import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: ${props => props.theme.palette.background.default};
`;


export const ContentWrapper = styled.div`
    flex: 1;
`;


export const BlogTitle = styled.h1`
    font-family: var(--font-heading);
    font-size: 3rem;
    color: ${props => props.theme.palette.primary.main};
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
    text-shadow: 3px 3px 0 ${props => props.theme.palette.secondary.main};
`;


export const BlogGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
`;


export const BlogPostSection = styled(motion.div)`
    background-color: ${props => props.theme.palette.background.default};
    border: 3px solid ${props => props.theme.palette.primary.main};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 5px 0 ${props => props.theme.palette.secondary.main};
    transition: all 0.3s ease;
    width: calc(33.333% - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 8px 8px 0 ${props => props.theme.palette.secondary.main};
    }
`;


export const BlogPostImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;


export const BlogPostContent = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;


export const BlogPostTitle = styled.h3`
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: ${props => props.theme.palette.primary.main};
    margin-bottom: 0.5rem;
`;


export const BlogPostExcerpt = styled.p`
    font-family: var(--font-body);
    font-size: 1rem;
    color: ${props => props.theme.palette.text.primary};
    margin-bottom: 1rem;
`;


export const BlogPostMeta = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${props => props.theme.palette.text.primary};
`;


export const BlogPostPostedDate = styled.span`
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: ${props => props.theme.palette.text.primary};
    text-align: center;
    margin-top: 0.5rem;
`;


export const BlogPostReadTime = styled.span`
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: ${props => props.theme.palette.text.primary};
    text-align: center;
`;


export const BlogPostFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: auto;
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BlogPostAuthor = styled.span`
    font-family: var(--font-body);
    font-size: 1rem;
    color: ${props => props.theme.palette.text.primary};
`;

export const ReadMoreLink = styled(Link)`
    font-family: 'Bangers', cursive;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({theme}) => theme.palette.primary.main};
    border: 2px solid ${({ theme }) => theme.palette.secondary.main};
    border-radius: 10px;
    padding: 0.1rem 0.5rem;
    text-decoration: none;
    display: inline-block;
    margin-top: 0.5rem;

    &:hover {
        text-decoration: underline;
    }
`;

export const BlogPostSource = styled.div`
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: ${props => props.theme.palette.text.primary};
    text-align: center;
    margin-top: 0.5rem;
`;

export const BlogSectionHeader = styled.span`
  font-family: var(--font-heading);
  font-weight: bold;
`;

export const PageFooter = styled.footer`
    text-align: center;
    padding: 1rem;
    background-color: ${props => props.theme.palette.background.default};
    margin-top: auto;
`;
