import React, {useState} from 'react';
import {ErrorMessage, StyledImageCircular} from '../../styles/ImageWithFallbackStyles';

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    fallbackSrc: string;
    srcSet?: string;
    sizes?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({src, alt, fallbackSrc}) => {
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true);
    };

    if (error) {
        return (
            <>
                <StyledImageCircular src={fallbackSrc} alt={`Fallback for ${alt}`}/>
                <ErrorMessage>Failed to load image: {alt}</ErrorMessage>
            </>
        );
    }

    return <StyledImageCircular src={src} alt={alt} onError={handleError}/>;
};

export default ImageWithFallback;
