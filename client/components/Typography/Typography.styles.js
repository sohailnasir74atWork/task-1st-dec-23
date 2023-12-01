import styled from 'styled-components';

export const StyledTypography = styled.p`
  margin: ${({ margin }) => margin || 'initial'};
  color: ${({ dimmed }) => (dimmed ? '#8a8a9e' : '#000')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  ${({ small }) => {
    if (small) return 'font-size: 0.875rem;';
  }}
`;
