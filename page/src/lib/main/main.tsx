import styles from './main.module.scss';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Camera, Sidebar} from "@perm-hack/ui";

/* eslint-disable-next-line */
export interface MainProps {
}


export function Main(props: MainProps) {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <Camera/>
    </div>
  );
}

export default Main;
