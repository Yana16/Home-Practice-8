import { NavLink } from 'react-router-dom';
import styles from '../../../modules/Navbar/NavbarAuth/navbar-auth.module.scss';

const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/" className={styles.link}>
        Contacts Page
      </NavLink>{' '}
      |
      <NavLink to="/registration" className={styles.link}>
        {' '}
        Registration
      </NavLink>{' '}
      |
      <NavLink to="/login" className={styles.link}>
        {' '}
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
