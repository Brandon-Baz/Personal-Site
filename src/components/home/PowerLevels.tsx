import { motion } from 'framer-motion';
import {
    PowerContainer,
    PowerItem,
    PowerName,
    PowerBarContainer,
    PowerBar,
    PowerLevel
} from "../../styles/PowerLevel";
import {Power} from "../../types/data";

interface PowerLevelsProps {
    powers: Array<Power>
}

const PowerLevels = (props: PowerLevelsProps) => {

    return (
        <PowerContainer>
            {props.powers.map((power, index) => (
                <PowerItem key={power.name}>
                    <PowerName>{power.name}</PowerName>
                    <PowerBarContainer>
                        <PowerBar
                            as={motion.div}
                            initial={{ width: 0 }}
                            animate={{ width: `${power.level}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                        />
                        <PowerLevel>{power.level}%</PowerLevel>
                    </PowerBarContainer>
                </PowerItem>
            ))}
        </PowerContainer>
    );
};

export default PowerLevels;