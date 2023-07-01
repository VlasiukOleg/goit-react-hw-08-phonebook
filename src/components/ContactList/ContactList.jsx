import { Contacts, ContactsItem } from './ContactList.styled';
import { red } from '@mui/material/colors';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
  );

  return (
    <Contacts>
      {visibleContacts.map(contact => (
        <ContactsItem key={contact.id}>
          <div>
            <AccountCircleIcon sx={{ width: 16, mr: 0.5 }} />
            {contact.name}
            <SettingsPhoneIcon sx={{ ml: 2, mr: 0.5, width: 16 }} />
            {contact.number}
          </div>

          <IconButton
            aria-label="delete"
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            <DeleteIcon sx={{ color: red[400] }} />
          </IconButton>
        </ContactsItem>
      ))}
    </Contacts>
  );
};
