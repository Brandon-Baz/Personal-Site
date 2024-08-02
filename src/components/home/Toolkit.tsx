import { motion } from 'framer-motion';
import { useData } from '../../contexts/DataContext';
import {
    ToolkitContainer,
    ToolItem
} from "../../styles/Toolkit";

// interface ToolkitProps {
//     tools: Array<Tool>
// }

const Toolkit = () => {
    const { tools } = useData();

    return (
        <ToolkitContainer>
            {tools.map((tool, index) => (
                <ToolItem
                    key={tool.name}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    {tool.icon}
                    <span>{tool.name}</span>
                </ToolItem>
            ))}
        </ToolkitContainer>
    );
};

export default Toolkit;