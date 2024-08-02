// src/components/ComicStrip.tsx
import React from 'react';
import { Theme } from '../../constants';

interface ComicPanel {
    image: string;
    caption: string;
}

interface ComicStripProps {
    theme: Theme;
    panels: ComicPanel[];
}

const ComicStrip: React.FC<ComicStripProps> = ({ theme, panels }) => {
    return (
        <div className={`comic-strip ${theme}`}>
            {panels.map((panel, index) => (
                <div key={index} className="comic-panel">
                    <img src={panel.image} alt={panel.caption} />
                    <p className="comic-panel-caption">{panel.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default ComicStrip;