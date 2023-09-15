import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/selectors';

import { MainLink, Nav } from './Navigation.styled';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';




export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <Nav>
      <MainLink to="/">
        <ContactPhoneIcon sx={{ mr: 1 }} />
        PB
      </MainLink>

      {isLoggedIn && <MainLink to="/contacts">Contacts</MainLink>}
      
    </Nav>
  );
};
