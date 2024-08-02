import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const FilterContainer = styled.div`
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  width: 95%;
  padding: 0.5rem 2rem 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.palette.text.primary};
`;