import { css } from 'styled-components';

export const mobile = (inner: any) => css`
  @media (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    ${inner};
  }
`;

export const tablet = (inner: any) => css`
  @media (min-width: ${props => props.theme.breakpoints.values.sm}px) and (max-width: ${props => props.theme.breakpoints.values.md}px) {
    ${inner};
  }
`;

export const desktop = (inner: any) => css`
  @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
    ${inner};
  }
`;