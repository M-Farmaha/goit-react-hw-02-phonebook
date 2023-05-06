import * as Styled from './styled';

export const Statistics = ({ options, total, positivePercentage }) => (
  <>
    <Styled.StatisticTitle>Statistics</Styled.StatisticTitle>
    {total() === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <>
        {Object.entries(options).map(el => (
          <Styled.StatisticItem key={el[0]}>
            {el[0]}: {el[1]}
          </Styled.StatisticItem>
        ))}
        <Styled.StatisticTotal>Total: {total()}</Styled.StatisticTotal>
        <Styled.StatisticPercentage>
          Positive feedback: {positivePercentage()}%
        </Styled.StatisticPercentage>
      </>
    )}
  </>
);

const Notification = ({ message }) => <p>{message}</p>;
