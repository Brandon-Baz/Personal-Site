import { BlogArticle } from "../types/data";
import {calculateReadintTime} from "../utils/ReadingTime";
import axios from "axios";


const DEV_TO_API_URL = 'https://dev.to/api/articles';
const USERNAME = 'brandonbaz';

interface DevToApiResponse {
    id: string;
    title: string;
    description: string;
    content: string;
    url: string;
    cover_image: string;
    user: {
        name: string;
    };
    published_at: string;
    reading_time_minutes: number;
    tag_list: string[];
}

const fetchDevToPosts = async (): Promise<BlogArticle[]> => {
    try {
        const response = await axios.get<DevToApiResponse[]>(`${DEV_TO_API_URL}?username=${USERNAME}`);

        if (response.status !== 200) {
            return [];
        }

        const parsedPosts: BlogArticle[] = response.data.map((item) => ({
            id: item.id,
            title: item.title,
            excerpt: item.description,
            link: item.url,
            coverImage: item.cover_image || '',
            author: item.user.name,
            publishDate: new Date(item.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            timeToRead: `${calculateReadintTime(item.content)}`,
            source: 'Dev.to'
        }));

        return parsedPosts
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

export default fetchDevToPosts;

