
import styled from 'styled-components';

const Divider = styled.hr`
  height: 2px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
`;

export default Divider;