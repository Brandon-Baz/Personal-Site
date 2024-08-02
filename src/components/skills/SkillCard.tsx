// src/components/SkillCard.tsx
import {SkillCardProps} from "../../types/Skills";
import {Card, CardContent, CardTitle, Progress, ProgressBar} from "../../styles/SkillsCardStyle";


export const SkillsCard = ({ skill }: SkillCardProps) => (
    <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    >
        <CardTitle>{skill.name}</CardTitle>
        <CardContent>Level: {skill.level}</CardContent>
        <CardContent>Experience: {skill.experience}</CardContent>
        <ProgressBar>
            <Progress level={skill.level} />
        </ProgressBar>
    </Card>
);

export default SkillsCard;
