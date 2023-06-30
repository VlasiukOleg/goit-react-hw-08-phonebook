import styled from 'styled-components';
import { ImCancelCircle } from 'react-icons/im';

export const Contacts = styled.ul`
  list-style: none;
  margin: 10px auto;
  padding: 0;
  max-width: 380px;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  justify-content: space-between;
  border-bottom: 1px solid black;

  button {
    display: flex;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    outline: none;
    padding: 4px 4px;
    background-color: transparent;
    color: white;
  }
`;

export const IconDelete = styled(ImCancelCircle)`
  color: lightcoral;
  transition: color 200ms ease-out;

  &:hover {
    color: red;
  }
`;
