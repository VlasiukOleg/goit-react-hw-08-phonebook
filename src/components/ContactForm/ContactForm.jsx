import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { PhoneBookForm, Message } from './ContactForm.styled';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations';

import { getContacts, getIsLoading } from 'redux/selectors';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (contacts.length > 0) {
      for (const contact of contacts) {
        if (contact.name === data.name) {
          Notify.warning(`${contact.name} is already in contact`);
          reset();
          return;
        }
      }
    }

    console.log(data);

    dispatch(addContact(data));

    reset();
  };

  return (
    <PhoneBookForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        type="text"
        label="Name"
        variant="outlined"
        name="name"
        size="small"
        sx={{ mb: 2 }}
        {...register('name', {
          required: true,
          pattern:
            /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/i,
        })}
      />
      {errors.name && <Message>Name may contain only letters</Message>}
      <TextField
        id="outlined-basic"
        type="text"
        label="Number"
        variant="outlined"
        name="name"
        size="small"
        sx={{ mb: 2 }}
        {...register('number', {
          required: true,
          pattern:
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i,
        })}
      />
      {errors.number && <Message>Phone number must be digits</Message>}
      <Button
        variant="contained"
        type="submit"
        size="small"
        disabled={isLoading}
        color="success"
      >
        Add contact
      </Button>
    </PhoneBookForm>
  );
};
