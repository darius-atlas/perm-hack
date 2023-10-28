import styles from './navbar.module.scss';
import {Link} from "react-router-dom";

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        <li><Link to="/">Камера</Link></li>
        <li><Link to="/statistics">Статистика</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
