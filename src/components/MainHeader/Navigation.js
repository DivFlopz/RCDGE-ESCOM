import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
const ctx = useContext(AuthContext);

  return (
        <nav className={classes.nav}>
            {ctx.isLoggedIn && (
                <button onClick={ctx.onLogout}>Logout</button>
            )}
        </nav>
  );
};

export default Navigation;
