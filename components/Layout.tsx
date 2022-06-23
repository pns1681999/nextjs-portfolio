import React, { ReactNode } from "react";
import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar"
import Bottombar from "../components/Bottombar";
import Explorer from "../components/Explorer";
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
        <Explorer/>
        <div className={styles.content}>{children}</div>
      </div>
      <Bottombar/>
    </>
  );
};

export default Layout;
