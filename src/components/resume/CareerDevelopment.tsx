import {List, ListItem, SectionContainer, SectionContent, SectionTitle} from "../../styles/ResumeSectionStyle";
import {FaChartLine} from "react-icons/fa";

export const CareerDevelopment = () => (
    <SectionContainer>
        <SectionTitle><FaChartLine /> Career Development</SectionTitle>
        <SectionContent>
            <List>
                <ListItem>Continuous learning of new technologies and programming languages</ListItem>
                <ListItem>Regular attendance at tech conferences and workshops</ListItem>
                <ListItem>Active participation in online coding communities and open-source projects</ListItem>
            </List>
        </SectionContent>
    </SectionContainer>
);