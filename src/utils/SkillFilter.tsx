import {FilterContainer, SearchIcon, SearchInput} from "../styles/SkillsFilterStyle";

interface SkillFilterProps {
    onFilterChange: (filter: string) => void;
}

const SkillsFilter = ({ onFilterChange } : SkillFilterProps) => {
    return (
        <FilterContainer>
            <div style={{ position: 'relative' }}>
                <SearchInput
                    type="text"
                    placeholder="Search skills..."
                    onChange={(e) => onFilterChange(e.target.value)}
                />
                <SearchIcon />
            </div>
        </FilterContainer>
    );
};

export default SkillsFilter;