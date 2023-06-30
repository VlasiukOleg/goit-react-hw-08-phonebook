import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContacts, getIsError, getIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(getIsError);
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="PhoneBook">
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      {isLoading && !error && <p>Request in progress...</p>}
      {contacts.length > 0 && <ContactList />}
      {error && <p>Oops.., something went wrong, please try again!</p>}
    </Section>
  );
};
