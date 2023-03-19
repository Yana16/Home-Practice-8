import { NavLink } from 'react-router-dom';
// import styles from '../../../modules/Navbar/NavbarAuth/navbar-auth.module.scss';

const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register">Registration</NavLink> |
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default NavbarAuth;
