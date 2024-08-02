// src/utils/fuzzyMatch.ts
import * as Fuse from 'fuse.js';
import {LRUCache} from 'lru-cache';

const synonyms: { [key: string]: string[] } = {
    'javascript': ['js', 'ecmascript', 'node.js', 'nodejs'],
    'typescript': ['ts'],
    'python': ['py', 'python3'],
    'java': ['jvm'],
    'c#': ['csharp', 'c sharp', '.net'],
    'c++': ['cpp', 'cplusplus'],
    'ruby': ['rb'],
    'php': [],
    'swift': [],
    'kotlin': [],
    'go': ['golang'],
    'rust': [],
    'scala': [],
    'html': ['html5'],
    'css': ['css3', 'scss', 'sass', 'less'],
    'sql': ['mysql', 'postgresql', 'oracle', 'sql server'],
    'nosql': ['mongodb', 'couchdb', 'cassandra'],
    'react': ['reactjs', 'react.js'],
    'angular': ['angularjs', 'angular.js'],
    'vue': ['vuejs', 'vue.js'],
    'node': ['nodejs', 'node.js'],
    'express': ['expressjs'],
    'django': [],
    'flask': [],
    'spring': ['spring boot', 'spring framework'],
    'asp.net': ['asp net', 'aspnet'],
    'docker': ['containerization'],
    'kubernetes': ['k8s'],
    'aws': ['amazon web services'],
    'azure': ['microsoft azure'],
    'gcp': ['google cloud platform'],
    'git': ['version control'],
    'agile': ['scrum', 'kanban'],
    'machine learning': ['ml', 'ai', 'artificial intelligence'],
    'data science': ['data analysis', 'big data'],
    'devops': ['devsecops', 'development operations'],
    'ci/cd': ['continuous integration', 'continuous deployment'],
    'rest': ['restful', 'rest api'],
    'graphql': [],
    'microservices': ['service-oriented architecture', 'soa'],
    'blockchain': ['distributed ledger'],
    'iot': ['internet of things'],
    'ar': ['augmented reality'],
    'vr': ['virtual reality'],
};

const cache = new LRUCache<string, FuzzyMatchResult[]>({
    max: 500,  // Maximum number of items in cache
    ttl: 1000 * 60 * 10 // 10 minutes in milliseconds
});

export interface FuzzyMatchResult {
    item: string;
    score: number;
    indices: readonly [number, number][];
}

export interface FuzzyMatchOptions {
    threshold?: number;
    includeScore?: boolean;
    includeIndices?: boolean;
}

export const fuzzyMatch = (
    pattern: string,
    list: string[],
    options: FuzzyMatchOptions = {}
): FuzzyMatchResult[] => {
    const cacheKey = `${pattern}:${list.join(',')}:${JSON.stringify(options)}`;
    const cachedResult = cache.get(cacheKey) as FuzzyMatchResult[] | undefined;
    if (cachedResult) {
        return cachedResult;
    }

    const expandedList = list.flatMap(item => {
        const itemSynonyms = synonyms[item.toLowerCase()] || [];
        return [item, ...itemSynonyms];
    });

    const MatchFuse = new Fuse.default(expandedList, {
        includeScore: options.includeScore !== false,
        includeMatches: options.includeIndices !== false,
        threshold: options.threshold || 0.6,
        minMatchCharLength: 2,
        ignoreLocation: true,
        useExtendedSearch: true,
    });

    const result = MatchFuse.search(pattern).map(item => ({
        item: item.item,
        score: item.score ? 1 - item.score : 1,
        indices: item.matches?.[0]?.indices || []
    }));

    cache.set(cacheKey, result);
    return result;
};

export const highlightMatches = (text: string, indices: readonly [number, number][]): string => {
    let result = '';
    let lastIndex = 0;
    indices.forEach(([start, end]) => {
        result += text.slice(lastIndex, start);
        result += `<mark>${text.slice(start, end + 1)}</mark>`;
        lastIndex = end + 1;
    });
    result += text.slice(lastIndex);
    return result;
};