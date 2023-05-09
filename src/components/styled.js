import styled from 'styled-components';

export const Section = styled.div`
  text-align: center;
  color: #000000;
  padding: 20px;
`;

export const PhonebookTitle = styled.h1`
  font-size: 40px;
  color: rgb(87, 88, 134);
`;

export const Form = styled.form`
  margin-bottom: 60px;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:focus {
    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: rgb(87, 88, 134);
  border-radius: 5px;
  border: none;
  padding: 6px 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover,
  &:focus {
    background-color: #12216b;
    color: #ffffff;
    cursor: pointer;
    transition: all 250ms linear;
    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 30px;
  color: rgb(90, 134, 87);
  margin-bottom: 20px;
`;

export const ContactFeature = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ContactList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  width: 360px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const ContactItem = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const ContactName = styled.span`
  width: 140px;
  display: block;
  margin-right: auto;
  font-size: 14px;
  font-weight: 400;
  color: rgb(87, 88, 134);
  text-align: left;
  overflow-wrap: break-word;
`;

export const ContactNumber = styled.span`
  width: 120px;
  margin-right: auto;
  font-size: 14px;
  font-weight: 400;
  color: rgb(90, 134, 87);
  text-align: left;
  overflow-wrap: break-word;
`;
