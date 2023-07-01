import { FilterInput } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';

import { changeFilter } from 'redux/filterSlice';
import TextField from '@mui/material/TextField';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <FilterInput>
      <TextField
        id="standard-search"
        label="Search contacts"
        type="search"
        variant="standard"
        onChange={onChangeFilter}
        sx={{ mb: 2, mt: 2 }}
      />
    </FilterInput>
  );
};
