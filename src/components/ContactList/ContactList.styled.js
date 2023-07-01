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

  div {
    display: flex;
    align-items: center;
  }
`;
