import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContacts, getIsError, getIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export default function Contacts() {
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
      <ContactFilter />
      {isLoading && !error && <p>Request in progress...</p>}
      {contacts.length > 0 && <ContactList />}
      {error && <p>Oops.., something went wrong, please try again!</p>}
    </Section>
  );
}
