import { useSelector } from 'react-redux';

import NavbarAuth from '../Navbar/NavbarAuth/NavbarAuth';
import NavbarUser from '../Navbar/NavbarUser/NavbarUser';

import { isUserLogin } from '../../redux/auth/auth-selectors';

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
