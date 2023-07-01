import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';
import { UserInfo } from './UserMenu.styled';

import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <UserInfo>
      <p>
        Welcome, <b>{user.name}</b>{' '}
      </p>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
      <Button
        variant="outlined"
        type="submit"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </UserInfo>
  );
};
