import {PropsWithChildren, useState} from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Sidebar from "./sidebar";
import styles from "../../styles/components/layout.module.css"
import {LayoutContext} from "../../contexts/layout-context";

const Layout = (props: PropsWithChildren<{}>) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <LayoutContext.Provider value={{isSidebarOpened, setIsSidebarOpened}}>
        <Navbar></Navbar>
        <div className={styles.articleContainer}>
          <Sidebar></Sidebar>
          <div className={styles.article}
               style={{
                 transition: "1s",
                 filter: isSidebarOpened ? "blur(3px)" : "blur(0)"
               }}>{props.children}</div>
        </div>
        {/*<Footer></Footer>*/}
      </LayoutContext.Provider>
    </div>
  );
};

export default Layout;