import styles from "../../styles/components/navbar.module.css"
import LinkButton from "../button/link-button";
import {useContext} from "react";
import {LayoutContext, LayoutProps} from "../../contexts/layout-context";

const Navbar = () => {
  const {isSidebarOpened, setIsSidebarOpened} = useContext<LayoutProps>(LayoutContext);
  const onMenuButtonClick = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <LinkButton href="/">
          <span className="material-icons">change_history</span>
          <h1>Neko Wiki</h1>
        </LinkButton>
        <div className={styles.spacing}></div>
        <div>
          <LinkButton><span>Sign In</span></LinkButton>
          <LinkButton><span>Sign Up</span></LinkButton>
        </div>
      </nav>

      <nav className={styles.navbar}>
        <LinkButton onClick={onMenuButtonClick}>
          <span className="material-icons">menu</span>
        </LinkButton>
        <div className={styles.spacing}></div>
        <LinkButton>
          <span className="material-icons">search</span>
        </LinkButton>
      </nav>
    </div>
  );
};

export default Navbar;