export const getExcerpt = (text: string, sentenceCount = 2) => {
    return text.split(/[.!?]+\s/).slice(0, sentenceCount).join('. ') + '.';
};