import {List, ListItem, SectionContainer, SectionContent, SectionTitle} from "../../styles/ResumeSectionStyle";
import {FaHeart} from "react-icons/fa";
export const Interests = () => (
    <SectionContainer>
        <SectionTitle><FaHeart /> Interests</SectionTitle>
        <SectionContent>
            <List>
                <ListItem>Game Development</ListItem>
                <ListItem>Artificial Intelligence and Machine Learning</ListItem>
                <ListItem>Open Source Contribution</ListItem>
                <ListItem>Tech Blogging</ListItem>
            </List>
        </SectionContent>
    </SectionContainer>
);