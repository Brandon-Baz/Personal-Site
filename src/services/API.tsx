// src/services/api.ts
import axios from 'axios';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getBlogPosts = async () => {
    try {
        const response = await api.get('/blog-posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
};

export const getPortfolioProjects = async () => {
    try {
        const response = await api.get('/portfolio-projects');
        return response.data;
    } catch (error) {
        console.error('Error fetching portfolio projects:', error);
        throw error;
    }
};

export default api;