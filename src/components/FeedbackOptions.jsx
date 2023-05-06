import * as Styled from './styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Styled.FeedbackOptions>
    {Object.keys(options).map(el => (
      <li key={el}>
        <Styled.Button type={el} onClick={onLeaveFeedback}>
          {el}
        </Styled.Button>
      </li>
    ))}
  </Styled.FeedbackOptions>
);
