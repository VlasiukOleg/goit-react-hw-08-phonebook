import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

import { FormSignUp } from './SignUpForm.styled';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <FormSignUp autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        type="text"
        label="Username"
        variant="outlined"
        name="name"
        size="small"
        sx={{ mb: 2 }}
      />
      <TextField
        id="outlined-basic"
        type="email"
        label="Email"
        variant="outlined"
        name="email"
        size="small"
        sx={{ mb: 2 }}
      />
      <TextField
        id="outlined-basic"
        type="password"
        label="Password"
        variant="outlined"
        name="password"
        size="small"
        sx={{ mb: 2 }}
      />

      {/* <Label>
        Username
        <input type="text" name="name" />
      </Label> */}
      {/* <Label>
        Email
        <input type="email" name="email" />
      </Label> */}
      {/* <Label>
        Password
        <input type="password" name="password" />
      </Label> */}
      {/* <button type="submit">Register</button> */}
      <Button variant="contained" type="submit" size="medium" margin="normal">
        Register
      </Button>
    </FormSignUp>
  );
};
