// import styles from '../NavbarUser/navbar-user.module.scss';

import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/auth/auth-selectors';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  return (
    <div>
      {name}, <button>Logout</button>
    </div>
  );
};

export default NavbarUser;
