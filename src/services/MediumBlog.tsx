import axios from 'axios';
import {BlogArticle} from "../types/data";
import {calculateReadintTime} from "../utils/ReadingTime";
import {getExcerpt} from "../utils/GetExcerpt";
import { extractTextFromHTML } from '../utils/ExtractTextFromHTML';
import {extractImageSrcFromHTML} from "../utils/ExtractImageFromHTML";

const API_URL = 'https://api.rss2json.com/v1/api.json';
const RSS_URL = 'https://medium.com/feed/@oAnubis';

interface MediumApiResponse {
    items: {
        id: string;
        title: string;
        description: string;
        link: string;
        thumbnail: string;
        author: string;
        pubDate: string;
        content: string;
    }[];
}

const fetchMediumPosts = async (): Promise<BlogArticle[]> => {
    try {
        const response = await axios.get<MediumApiResponse>(`${API_URL}?rss_url=${RSS_URL}`);
        if (response.status !== 200) {
            return [];
        }

        return response.data.items.map((item) => ({
            id: item.id,
            title: item.title,
            excerpt: getExcerpt(extractTextFromHTML(item.content)),
            link: item.link,
            coverImage: extractImageSrcFromHTML(item.content) || '',
            author: item.author,
            publishDate: new Date(item.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            timeToRead: `${calculateReadintTime(item.content)} minutes`,
            source: 'Medium'
        }));
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

export default fetchMediumPosts;
