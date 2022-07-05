import React from "react";
import Image from "next/image";
import styles from "../styles/Titlebar.module.scss";
const Titlebar: React.FC = () => {       
  const menuOptions: string[] = [
    'File',
    'Edit',
    'View',
    'Go',
    'Run',
    'Terminal',
    'Window',
    'Help'
  ]
  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        {
          menuOptions.map((item: string) => {
            return (
              <p key={item}>{item}</p>
            )
          })
        }
      </div>
      <p className={styles.title}>Son Pham - Portfolio</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};
export default Titlebar;
