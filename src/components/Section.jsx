import * as Styled from './styled';

export const Section = ({ title, children }) => (
  <Styled.Section>
    <Styled.Title>{title}</Styled.Title>
    {children}
  </Styled.Section>
);
