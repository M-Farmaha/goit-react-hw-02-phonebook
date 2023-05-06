import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
  color: #000000;
  margin-top: 30px;
  padding: 30px;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: rgb(87, 88, 134);
`;

export const FeedbackOptions = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-size: 16px;
  color: #000000;
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  text-transform: capitalize;

  &:hover {
    background-color: ${props => {
      if (props.type === 'good') {
        return 'lightgreen';
      } else if (props.type === 'neutral') {
        return 'rgb(243, 250, 114)';
      } else if (props.type === 'bad') {
        return 'salmon';
      } else {
        return '#83e8ff';
      }
    }};
    cursor: pointer;
    transition: all 250ms linear;
    transform: scale(1.05);
  }
`;

export const StatisticTitle = styled.h3`
  font-size: 30px;
  color: rgb(90, 134, 87);
`;

export const StatisticItem = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const StatisticTotal = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StatisticPercentage = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(90, 134, 87);
`;

export const ExtentionText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 200px;
  color: #ebc444;
`;
