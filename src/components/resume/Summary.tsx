import {SectionContainer, SectionContent, SectionTitle} from "../../styles/ResumeSectionStyle";
import {FaUser} from "react-icons/fa";
import {useData} from "../../contexts/DataContext";

export const Summary = () => {
    const { summary } = useData();
    return (
        <SectionContainer>
            <SectionTitle><FaUser /> Summary</SectionTitle>
            <SectionContent>
                <p>{summary}</p>
            </SectionContent>
        </SectionContainer>
    );
};