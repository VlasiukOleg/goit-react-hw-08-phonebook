import styled from 'styled-components';

export const PhoneBookForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 5px 15px;
  background-color: rgba(0, 128, 0, 0.57);
  color: white;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: green;
  }
`;

export const Message = styled.div`
  width: 340px;
  font-size: 12px;
  color: tomato;
  margin-bottom: 2px;
`;
