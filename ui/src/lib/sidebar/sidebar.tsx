import styles from './sidebar.module.scss';
import SidebarItem from "../sidebar-item/sidebar-item";

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  return (
    <div className={styles['container']}>
      <SidebarItem/>
    </div>
  );
}

export default Sidebar;
