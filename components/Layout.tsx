import React, { ReactNode } from "react";
import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar"
import styles from "../styles/Layout.module.scss";
type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar/>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
