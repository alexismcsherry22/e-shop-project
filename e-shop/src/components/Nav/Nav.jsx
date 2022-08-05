import styles from "./Nav.module.scss";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={styles.Nav_Bar}>
      <NavLink className={styles.Nav_Link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.Nav_Link} to="/store">
        Store
      </NavLink>
      <NavLink className={styles.Nav_Link} to="/cart">
        Cart
      </NavLink>
    </nav>
  )
}

export default Nav;