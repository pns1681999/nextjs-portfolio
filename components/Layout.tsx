import React, { ReactNode } from "react";
import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar"
import Bottombar from "../components/Bottombar";
import Explorer from "../components/Explorer";
import styles from "../styles/Layout.module.scss";
import Tabsbar from "./Tabsbar";
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
        <div style={{width: '100%'}}>
          <Tabsbar />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      <Bottombar/>
    </>
  );
};

export default Layout;
