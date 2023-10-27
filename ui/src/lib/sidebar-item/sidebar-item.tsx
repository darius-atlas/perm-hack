import styles from './sidebar-item.module.scss';
import Button from "../button/button";

/* eslint-disable-next-line */
export interface SidebarItemProps {
  name: string
  percent: number | string
  weight: number | string
  href: string
}

export function SidebarItem() {
  const obj: SidebarItemProps[] = [
    {
      name: "Дерево",
      href: "some",
      percent: "10%",
      weight: 200
    },
    {
      name: "Металл",
      href: "some",
      percent: "10%",
      weight: 200
    },
    {
      name: "Пластик",
      href: "some",
      percent: "10%",
      weight: 200
    },
    {
      name: "Стекло",
      href: "some",
      percent: "10%",
      weight: 200
    }
  ]
  return (
    <>
      {obj.map((item, i) => (
        <div className={styles.item} key={i * 2}>
          <div className={styles.heading}>
            <p className={styles.text}>
              {item.name}
            </p>
            <p className={styles.percent}>
              {item.percent}
            </p>
          </div>
          <span className={styles.line}></span>
          <div className={styles.info}>
            <p>{item.weight}</p>
            <span>Тонн</span>
            <Button link={"some"} className={styles.link}>Аналитика</Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default SidebarItem;
