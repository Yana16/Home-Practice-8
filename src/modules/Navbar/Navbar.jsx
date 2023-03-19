import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import NavbarMenu from
import NavbarAuth from '../Navbar/NavbarAuth/NavbarAuth';
import NavbarUser from '../Navbar/NavbarUser/NavbarUser';
import { isUserLogin } from '../../redux/auth/auth-selectors';

// import styles from

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div>
      <div>
        <div>
          {!isLogin && <NavbarAuth />}
          {isLogin && <NavbarUser />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
