import React, { useState, useEffect, DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import { FastOmit, IStyledComponentBase } from 'styled-components/dist/types';

interface LazyImageProps {
    src: string;
    alt: string;
    Component: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, never>> & string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, Component }) => {
    const [imageSrc, setImageSrc] = useState<string>('');

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImageSrc(src);
    }, [src]);

    return <Component src={imageSrc} alt={alt} />;
};

export default LazyImage;
