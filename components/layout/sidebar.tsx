import styles from "../../styles/components/sidebar.module.css"
import LinkButton from "../button/link-button";
import {useContext} from "react";
import {LayoutContext, LayoutProps} from "../../contexts/layout-context";

const Sidebar = () => {
  const {isSidebarOpened, setIsSidebarOpened} = useContext<LayoutProps>(LayoutContext);
  const sidebarWidth = "420px";
  const onSidebarBackgroundClick = () => {
    setIsSidebarOpened(false)
  };

  return (
    <div className={styles.sidebarContainer}
         style={{
           width: isSidebarOpened ? sidebarWidth : "0",
           minWidth: isSidebarOpened ? sidebarWidth : "0",
           opacity: isSidebarOpened ? 1 : 0,
         }}>
      <div className={styles.sidebar}>
        <LinkButton isHoverSliderEnabled={true}>
          <span>래그돌</span>
        </LinkButton>

        <LinkButton isHoverSliderEnabled={true}>
          <span>먼치킨</span>
        </LinkButton>

        <LinkButton isHoverSliderEnabled={true}>
          <span>스코티시 폴드</span>
        </LinkButton>

        <LinkButton isHoverSliderEnabled={true}>
          <span>노르웨이 숲</span>
        </LinkButton>

        <LinkButton isHoverSliderEnabled={true}>
          <span>페르시안</span>
        </LinkButton>
      </div>
      <div className={`${isSidebarOpened ? styles.sidebarBackground : ""}`}
           onClick={onSidebarBackgroundClick}></div>
    </div>
  );
};

export default Sidebar;