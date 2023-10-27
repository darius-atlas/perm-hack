import styles from './navbar.module.scss';
import {Link} from "react-router-dom";

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles.wrapper}>
      <Link to={"/"} className={styles.logo}>Logo</Link>
      <ul className={styles.container}>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
      </ul>
    </div>
  );
}

export default Navbar;
