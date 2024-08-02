import { motion } from 'framer-motion';
import {
    GalleryContainer,
    NemesisCard,
    NemesisName,
    NemesisDescription,
    WeaknessList,
    WeaknessItem
} from "../../styles/NemesisStyle";
import {Nemesis} from "../../types/data";

interface NemesisGalleryProps {
    nemeses: Array<Nemesis>
}

const NemesisGallery = (props: NemesisGalleryProps) => {

    return (
        <GalleryContainer>
            {props.nemeses.map((nemesis, index) => (
                <NemesisCard
                    key={nemesis.name}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <NemesisName>{nemesis.name}</NemesisName>
                    <NemesisDescription>{nemesis.description}</NemesisDescription>
                    <WeaknessList>
                        {nemesis.weaknesses.map((weakness, idx) => (
                            <WeaknessItem key={idx}>{weakness.weakness}</WeaknessItem>
                        ))}
                    </WeaknessList>
                </NemesisCard>
            ))}
        </GalleryContainer>
    );
};

export default NemesisGallery;