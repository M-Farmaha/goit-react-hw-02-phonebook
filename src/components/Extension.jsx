import * as Styled from './styled';

export const Extension = ({ options }) => {
  return (
    Object.keys(options).length < 4 && (
      <Styled.ExtentionText>
        Extension: try to add any "key: number" to state object and check the
        result!
      </Styled.ExtentionText>
    )
  );
};
