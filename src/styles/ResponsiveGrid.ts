import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export interface IColumnProps {
  size: string;
}

const Column = styled.div<IColumnProps>`
  flex: ${props => props.size.split('/')[0]};
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export { Container, Row, Column };