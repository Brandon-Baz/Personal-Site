
import {GridContainer} from "../../styles/SkillsCardStyle";
import {SkillsCard} from "./SkillCard";
import {SkillCategories} from "../../types/Skills";


export const SkillsGrid = ({ skills } : SkillCategories) => (
    <GridContainer>
        {skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
        ))}
    </GridContainer>
);