export const extractImageSrcFromHTML = (htmlContent: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const firstImgTag = doc.querySelector('img');
    return firstImgTag ? firstImgTag.src : null;
};
